// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// async function enableMocking() {
//     const { worker } = await import("./mocks/broswer");
//     return worker.start();
// }

// enableMocking().then(() => {

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
// });
