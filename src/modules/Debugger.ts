import { app, domObjects } from "./app";

export class Debugger {
	container:HTMLDivElement;
    wrapper:HTMLDivElement;
	constructor(){
		this.container = document.createElement('div');
        this.container.innerHTML = '<h4>Debugger</h4>';
        this.container.id = 'debugger';

        this.wrapper = document.createElement('div');
        this.container.append(this.wrapper);
		app?.appendChild(this.container);

	}

	update(){
		this.wrapper.innerHTML = '';
		domObjects.map((current, index) => {
			let object = document.createElement('div');
			object.classList.add('debug-element');
			object.innerHTML = current.name + '</br>Width: ' + current.width  + '</br>Height: ' + current.height + '</br>Visible: ' + current.visibility;
			this.wrapper.appendChild(object);
		});
	}
};