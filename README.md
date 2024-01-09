# create-react-rust
This is a template generator for a React app that uses Rust with wasm.

<p align="center">
  <a href="https://www.npmjs.com/package/create-react-rust"><img src="https://img.shields.io/npm/v/create-react-rust.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/create-react-rust"><img src="https://img.shields.io/npm/dm/create-react-rust.svg?style=flat-square"></a>
</p>

## pre-req

[rust](https://www.rust-lang.org/tools/install)

[Node](https://nodejs.org/en/download/current)

## Installation
Install the package globally with npm.

```bash
npm install -g create-react-rust
```
or 
```bash
npx create-react-rust create my-app
```

## Usage
provide a name for your app and it will be created in a folder with the same name.

```bash
create-react-rust create my-app
```

## To see changes made in rust
1 yarn build:wasm

2 yarn build:bindgen

## License
MIT

## Dependencies
- Node.js >= 12.0.0
- rust setup including cargo

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
