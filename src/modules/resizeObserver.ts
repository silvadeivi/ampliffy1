import { domObjects, debug } from "./app";
import { historical } from "./history";

const resizeObserver = new ResizeObserver((entries) => {
	entries.map((current, index) => {
        domObjects.filter(obj => {
            if(current.target === obj.htmlElement){
                obj.width = current.contentRect.width;
                obj.height = current.contentRect.height;

                historical.updateItem({
                    element: obj,
                    date: new Date(),
                    observer: `Resize: ${obj.width} ${obj.height}`
                });
            }
		});
	});
	debug.update();
});

export { resizeObserver }