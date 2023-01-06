import { app, domObjects } from "./app";

export class Debugger {
	container:HTMLDivElement;
	constructor(){
		this.container = document.createElement('div');
		this.container.id = 'debugger';
		app?.appendChild(this.container);

	}

	update(){
		this.container.innerHTML = '';
		domObjects.map((current, index) => {
			let object = document.createElement('div')
			object.classList.add('debug-element');
			object.innerHTML = current.name.toUpperCase() + '</br>Width: ' + current.width  + '</br>Height: ' + current.height;
			this.container.appendChild(object);
		})
	}

	test(){
		return this.container
	}
}