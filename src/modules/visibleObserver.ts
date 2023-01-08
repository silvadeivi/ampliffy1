import { domObjects, debug } from "./app";
import { domObject } from "./domObject";
const intersectionObserver = new IntersectionObserver((entries) => {
	//if (entries[0].intersectionRatio <= 0) return;
	console.log('INTERSECT RATIO ENTRIES');
	console.log(entries);

	entries.map((current, index) => {
		domObjects.filter(obj => {
			obj.visibility = (current.target === obj.htmlElement);
		});
		console.log('++++++DOM OBJECT INSTANCE+++++++');
		console.log(domObject);
	});
	debug.update();
});
export{intersectionObserver}