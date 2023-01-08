import { debug } from "../src/modules/app";

test('Debug container created', () => {
    expect(debug.container.nodeName).toBe('DIV');
});