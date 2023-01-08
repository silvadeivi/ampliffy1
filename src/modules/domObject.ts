import { app, domObjects, debug } from "./app";
import { resizeObserver } from "./resizeObserver";
import { intersectionObserver } from "./visibleObserver";
class domObject {
    id:string;
    name:string;
    width:number;
    height:number;
    content:string;
    visibility:boolean;
    htmlElement:HTMLDivElement;

    constructor(){
		let index = domObjects.length;
		this.id = 'element-'+index.toString();
		this.name = 'Elemento '+index.toString();
        this.htmlElement = document.createElement('div');

        //dataBind(this.htmlElement, this);

		resizeObserver.observe(this.htmlElement);

		debug.update();
        domObjects.push(this);
    }

    render(content:string = ''){
        this.htmlElement.classList.add('element');
		this.htmlElement.id = this.id;
		this.htmlElement.setAttribute('data-id', this.name);
        this.width = this.htmlElement.offsetWidth;
		this.height = this.htmlElement.offsetHeight;
        this.content = content;

        this.htmlElement.innerHTML = `${this.content}`;

        app?.appendChild(this.htmlElement);

        intersectionObserver.observe(this.htmlElement);
        console.log(`++++++++${this.name}++++++++`);
        console.log(this);
    }

    update(content:string){
        this.content = content;
        this.htmlElement.innerHTML = `${this.content}`;
    }
}

export { domObject };