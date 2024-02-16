// // import './utils.js'
// import isSenior, { square, add } from "./utils";
import React from "react";
import { createRoot } from "react-dom/client";
import IndecisionApp from "./components/IndecisionApp";
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const appRoot = document.getElementById("app");
const root = createRoot(appRoot);
root.render(<IndecisionApp/>);
