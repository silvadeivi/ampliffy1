import { app, domObjects, debug } from "./app";
import { resizeObserver } from "./resizeObserver";
class domObject {
    id:string;
    name:string;
    width:number;
    height:number;
    content:string;
    htmlElement:HTMLDivElement;
    constructor(){
		let index = domObjects.length
		this.id = 'element-'+index.toString()
		this.name = 'Elemento '+index.toString()
        this.htmlElement = document.createElement('div');

		resizeObserver.observe(this.htmlElement);
		debug.update();
    }
    render(content:string = ''){
        this.htmlElement.classList.add('element');
		this.htmlElement.id = this.id;
		this.htmlElement.setAttribute('data-id', this.name);
        this.width = this.htmlElement.offsetWidth;
		this.height = this.htmlElement.offsetHeight;
        this.content = content;

        this.htmlElement.innerHTML = `${this.content}`;

        app?.appendChild(this.htmlElement)
    }

    update(content:string){
        this.content = content;
        this.htmlElement.innerHTML = `${this.content}`;
    }
}

export {domObject};