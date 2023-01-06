import { domObjects } from "./modules/app";
import { domObject } from "./modules/domObject";

let docelement1 = new domObject;
docelement1.render('Lorem Ipsumo dolor sit ammet');
domObjects.push(docelement1);
docelement1.render('Otro text diferente');

docelement1.update('Cambio de texto por otro adicional via objeto');
console.log('Objects Array');
console.log(domObjects);
