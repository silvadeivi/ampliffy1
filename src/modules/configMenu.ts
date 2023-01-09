import { app, domObjects } from "./app";
import { Input } from "./Inputs";
export class Menu{
    container:HTMLDivElement;
    constructor(){
        this.container = document.createElement('div');
        const button = document.createElement('button');
        button.append(icon('edit' , ''));
        button.append(icon('arrow-down' , 'close'));

        this.container.id = 'forms-menu';
        
        app.appendChild(this.container);
        const htmlButton = this.container.appendChild(button);

        htmlButton.addEventListener('click', ()=>{
            console.log(this.container);
            if(this.container.classList.contains('active')){
                this.container.classList.remove('active');
            } else {
                this.container.classList.add('active');
            };
        });

        domObjects.map((current, index) => {
            const input = new Input;
            input.render(current, this.container);
        });

    }
}

function icon(icon:string, classes:string = ''){

    let svg : string;

    switch(icon){
        case 'arrow-down': {
            svg =  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>';
            break;
        }
        case 'edit': {
            svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z"/></svg>';
            break;
        }
        default : {
            throw console.error('No icon selected for icon function call');
        }
    }


    let domIcon : HTMLElement = document.createElement('i');

    domIcon.classList.add('icon');
    if(classes){
        let classesArr = classes.split(' ');
        classesArr.forEach(cssclass => {
        domIcon.classList.add(cssclass);
    });
    }
    domIcon.innerHTML = svg;
    return domIcon;
}