import { domObject } from "./domObject"
import { Debugger } from "./Debugger"
const app = document.getElementById('app') as HTMLDivElement

const debug = new Debugger();

let domObjects:domObject[] = []
export { app, domObjects, debug }