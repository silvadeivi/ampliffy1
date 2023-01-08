import { domObjects } from "../src/modules/app";
import { domObject } from "../src/modules/domObject";


global.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn(),
}))

test('Dom objects array check', () => {

    new domObject().render();
    new domObject().render();
    expect(domObjects.length).toBe(2);
});