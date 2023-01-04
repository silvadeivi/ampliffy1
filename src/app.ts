var app = document.getElementById('app') as HTMLDivElement

type Container = {
    index: number
    name: string
}
var domObjects: Container[] = []


class domObject {
    constructor(){
		let index = domObjects.length
        let element = document.createElement('div')
		let name:string = 'element-'+index.toString()
        element.classList.add('element')
		element.id = name
        app?.appendChild(element)

		domObjects.push({index, name})

		console.log(domObjects)
    }
}
let docelement1 = new domObject


