import { domObjects } from "./modules/app";
import { domObject } from "./modules/domObject";
import { Menu } from "./modules/configMenu";

let docelement1 = new domObject;
let docelement2 = new domObject;


docelement1.render('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget diam at quam tincidunt bibendum. Nulla nec tellus ac dui imperdiet euismod eu sit amet felis.');

docelement2.render('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget diam at quam tincidunt bibendum. Nulla nec tellus ac dui imperdiet euismod eu sit amet felis.');

const menu = new Menu();

console.log('Objects Array');
console.log(domObjects);