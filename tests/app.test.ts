import { debug } from "../src/modules/app";
test('Get debugger dom element', () => {
    const nodEl = debug.test();
    expect(nodEl.getAttribute('id')).toBe('debugger');
});