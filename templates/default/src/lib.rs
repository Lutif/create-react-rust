use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn big_computation() {
    alert("this could be some heavy lifiting delegated to Rust!");
}

#[wasm_bindgen]
pub fn welcome(name: &str) {
   alert(&format!("Hello {}, from Rust!", name));
}
