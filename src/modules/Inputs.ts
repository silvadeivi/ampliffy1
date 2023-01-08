import { app } from "./app";
import { domObject } from "./domObject";
export class Input{
    input:HTMLTextAreaElement;
	target:object;
	container:HTMLFormElement;
	value:string;

	constructor(){
		this.container = document.createElement('form');
		this.input = document.createElement('textarea');
	}

	render(target:domObject, container:HTMLElement){
		const htmlForm = container.appendChild(this.container);
		const button = document.createElement('button');

		this.target = target;
		this.input.value = target.content;
		
		button.type = 'submit';
		button.innerHTML = 'Submit';
		htmlForm.appendChild(this.input);
		htmlForm.appendChild(button);

		htmlForm.addEventListener('submit', (e) => {
			e.preventDefault();
			target.update(this.input.value);
		});
	}
}