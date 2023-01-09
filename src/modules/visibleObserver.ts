import { domObjects, debug } from "./app";
import { domObject } from "./domObject";
import { historical } from "./history";

const intersectionObserver = new IntersectionObserver((entries) => {
	//if (entries[0].intersectionRatio <= 0) return;

	entries.map((current, index) => {
		domObjects.filter(obj => {
			//obj.visibility = (current.target === obj.htmlElement);
            console.log(current);
            if(current.target === obj.htmlElement){
                obj.visibility = current.isIntersecting;
                historical.updateItem({
                    element: obj,
                    date: new Date(),
                    observer: 'Visible ' + obj.visibility
                });
            }
		});
	});
	debug.update();
});
export{intersectionObserver}