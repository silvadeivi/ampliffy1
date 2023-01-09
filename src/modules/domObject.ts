import { mainContent, domObjects, debug } from "./app";
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

    constructor(
        id:string = '',
        name:string = '',
        htmlElement:HTMLDivElement = document.createElement('div'),
        content:string = '',
    ){
		let index = domObjects.length;
		this.id = id != null ? 'element-'+index.toString() : id;
		this.name = name != null ? 'Elemento '+index.toString() : name;
        this.htmlElement = htmlElement != null ? document.createElement('div') : htmlElement;
        this.content = content != null ? '' : content;

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

        mainContent?.appendChild(this.htmlElement);

        intersectionObserver.observe(this.htmlElement);
    }

    update(content:string){
        this.content = content;
        this.htmlElement.innerHTML = `${this.content}`;
    }
}

export { domObject };