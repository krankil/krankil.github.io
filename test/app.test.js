import App from "../src/App";
import ReactDOM from "react-dom/client";
import React from "react";

describe("Test suite to test App.js", () => {
    it("renders button classNamed button if successfull", () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        ReactDOM.createRoot(container).render(<App/>);
    })
})