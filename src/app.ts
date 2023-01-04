var app = document.getElementById('app') as HTMLDivElement

type Container = {
    name: string;
    width: number;
    height: number;
}
var domObjects:Container[] = []

var resizeObserver = new ResizeObserver((entries) => {
	console.log(entries);
});

class domObject {
    constructor(){
		let index = domObjects.length
        let element = document.createElement('div')
		let name = 'element-'+index.toString()
        element.classList.add('element')
		element.id = name
        app?.appendChild(element)

		let width = element.offsetWidth;
		let height = element.offsetHeight



		domObjects.push({name, width, height})

		//domObjects.map(outputArray);
		console.log(domObjects);
		resizeObserver.observe(element);
    }
}
let docelement1 = new domObject