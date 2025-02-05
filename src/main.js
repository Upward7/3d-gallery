import "./style.css"
import Core from "./core/core.js";

const core = new Core(document.querySelector("canvas.webgl"));

core.render();