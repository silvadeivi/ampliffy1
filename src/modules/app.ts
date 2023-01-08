import { domObject } from "./domObject";
import { Debugger } from "./Debugger";

const app = document.getElementById('app');
const debug = new Debugger();
let domObjects:domObject[] = [];

export { app, debug, domObjects };