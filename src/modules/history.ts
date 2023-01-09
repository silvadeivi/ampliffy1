import { app } from "./app";
import { domObject } from "./domObject";
interface historyItem {
    element: domObject;
    date: Date;
    observer: string;
}

class History {
    items:historyItem[]=[];
    divHistory : HTMLDivElement;
	divHistoryWrapper : HTMLDivElement;
    constructor(){
        this.divHistory = document.createElement('div');
		this.divHistory.innerHTML = '<h4>History</h4>';
		this.divHistoryWrapper = document.createElement('div');
        this.divHistory.id = 'history';
        app.append(this.divHistory);
    }
    updateItem(historyItem:historyItem){
        this.items.push(historyItem);
        this.render();
    }
    render(){
        this.items.map( (item) => {
            let domItemElement = document.createElement('div');
            domItemElement.classList.add('history-item');
            domItemElement.innerHTML = `
                <span>
                    <strong>Element:</strong> ${item.element.name}</br>
                    <strong>Fecha:</strong> ${item.date}</br>
                    <strong>Observer:</strong> ${item.observer}</br>
                </span>
            `;
			this.divHistory.append(this.divHistoryWrapper);
            this.divHistoryWrapper.append(domItemElement);
            this.divHistoryWrapper.scrollTop = this.divHistoryWrapper.scrollHeight;
        });
    }
}

export const historical = new History;