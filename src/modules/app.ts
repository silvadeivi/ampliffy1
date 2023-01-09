import { domObject } from "./domObject";
import { Debugger } from "./Debugger";

const app = document.getElementById('app');
const mainContent = document.createElement('div');
mainContent.id = "main";
app.append(mainContent);

const debug = new Debugger;


let domObjects:domObject[] = [];

export { app, debug, domObjects, mainContent };