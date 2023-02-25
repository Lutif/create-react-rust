import chalk from  'chalk';
import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const __dirname = path.resolve();

const templates = {
  default: path.join(__dirname, 'templates', 'default'),
  // add other templates here open the PR/issue
};
const createReactApp = (name ="reactive-rust", template) => {
  console.log(chalk.green(`Creating a new React Rust project "${name}" `));

  const templateDir = templates[template];
  const targetDir = path.join(process.cwd(), name);

  fs.ensureDirSync(targetDir);
  fs.copySync(templateDir, targetDir);
  console.log(chalk.bgGreenBright(chalk.green(`Installing npm dependencies...`)));
  execSync(`cd ${name} && npm install`, { stdio: 'inherit' });
  console.log(chalk.bgRed(chalk.green(`Setting up rust env...`)));
  execSync(`rustup target add wasm32-unknown-unknown`);
  execSync(`cd ${name} && cargo build --target wasm32-unknown-unknown`);
  console.log(chalk.bgMagenta(chalk.green(`Installing webassembly support...`)));
  execSync(`cd ${name} && cargo install -f wasm-bindgen-cli`);
  execSync(`cd ${name} && wasm-bindgen target/wasm32-unknown-unknown/debug/rusty_react.wasm --out-dir build`)
  console.log(chalk.bgGray(chalk.green(`Building your app, this may take few moments...`)));
  execSync(`cd ${name} && npm run build`); 
  console.log(chalk.green(`Done!`));
  execSync(`cd ${name} && npm run dev`);
};

yargs(hideBin(process.argv))
  .command(  
  'create <name>',
  'create a new react-rust project',
  (yargs) => {
    return yargs
      .positional('name', {
        describe: 'name of the project',
        type: 'string'
      })
  }, (argv) => {
    createReactApp(argv.name, argv.template)
  })
  .demandCommand(1)
  .parse()