import {mult, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    //action
    const res1 = sum(a, b)
    const res2 = sum(b, c)

    //expect result
    expect(res1).toBe(3)
    expect(res2).toBe(5)
})

test('multiply should be correct', () => {
    //action
    const res1 = mult(a, b)
    const res2 = mult(b, c)

    //expect result
    expect(res1).toBe(2)
    expect(res2).toBe(6)
})