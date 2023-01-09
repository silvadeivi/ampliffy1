import { app } from "./app";
import { domObject } from "./domObject";
interface historyItem {
    element: domObject;
    date: Date;
    observer: string;
}

class History {
    items:historyItem[]=[];
    divHistory:HTMLDivElement;
    constructor(){
        this.divHistory = document.createElement('div');
        this.divHistory.id = 'history';
        app.append(this.divHistory);
    }
    updateItem(historyItem:historyItem){
        this.items.push(historyItem);
        this.render();
    }
    render(){
        let domItemElements:string = '';
        this.items.map( (item) => {
            let domItemElement = document.createElement('div');
            domItemElement.classList.add('history-item');
            domItemElement.innerHTML = `
                <span><strong>Element:</strong> ${item.element.name}</br></span>
                <span><strong>Fecha:</strong> ${item.date}</br></span>
                <span><strong>Observer:</strong> ${item.observer}</br></span>
            `;
            this.divHistory.append(domItemElement);
            this.divHistory.scrollTop = this.divHistory.scrollHeight;
        });
    }
}

export const historical = new History;