import {MiniMaple} from "../src/miniMaple";

test('test 1', () => {
    const polynom = new MiniMaple();
    polynom.set("4*x^3, x");
    expect(polynom.differentiation()).toBe("12*x^2");
});

test('test 2', () => {
    const polynom = new MiniMaple();
    polynom.set("4*x^3, y");
    expect(polynom.differentiation()).toBe("0");
});

test('test 3', () => {
    const polynom = new MiniMaple();
    polynom.set("4*x^3-x^2, x");
    expect(polynom.differentiation()).toBe("12*x^2-2*x");
});

test('test 4', () => {
    const polynom = new MiniMaple();
    polynom.set("-4*x^12+y*3*x^2, x");
    expect(polynom.differentiation()).toBe("-48*x^11+6*y*x");
});

test('test 5', () => {
    const polynom = new MiniMaple();
    polynom.set("-4*x^12+33*y-3*x^2*y^2-12*y+3, y");
    expect(polynom.differentiation()).toBe("33-6*x^2*y-12");
});

test('test 6', () => {
    const polynom = new MiniMaple();
    polynom.set("-12*y-12*x^1+3*y^12*x-4*x^11+2*x-3*y+12*c*v*b, x");
    expect(polynom.differentiation()).toBe("-12+3*y^12-44*x^10+2");
});

test('test 7', () => {
    const polynom = new MiniMaple();
    polynom.set("-12*y-12*x^1+3*x*y^12-4*x^11+2*x-3*y+12*c*v*b, y");
    expect(polynom.differentiation()).toBe("-12+36*x*y^11-3");
});

test('test 8', () => {
    const polynom = new MiniMaple();
    polynom.set("-3*x^3+12*x-9, x");
    expect(polynom.differentiation()).toBe("-9*x^2+12");
});