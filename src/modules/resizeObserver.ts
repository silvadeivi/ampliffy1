import { domObjects, debug } from "./app";

const resizeObserver = new ResizeObserver((entries) => {
	entries.map((current, index) => {
		domObjects[index].width = current.contentRect.width
		domObjects[index].height = current.contentRect.height
	});
	debug.update();
});

export { resizeObserver }