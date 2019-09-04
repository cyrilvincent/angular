import * as rx from 'rxjs';
import * as op from 'rxjs/operators';

describe('OfTest', () => {
    const myObservable = rx.of(42);
    myObservable.subscribe((value) => {
        console.log(value);
        it('should be 42', () => expect(value).toBe(42) );
    });
});

describe('PipeTest', () => {
    const o = rx.of(42);
    o.pipe(
        op.tap((value) => console.log('Avant : ' + value)),
        op.map((value: number) => value + 1),
        op.tap((value) => console.log('Après : ' + value)),
    ).subscribe((value: number) => {
        it('should be 43', () => expect(value).toBe(43) );
    });
});



describe('MapTest', () => {
    const tab1 = [1, 2, 3];
    const otab = rx.from(tab1);
    otab.pipe(
        op.map((x: number) => x * 10),
    ).subscribe((x: number) => {
        console.log(x);
    });
});

describe('FilterTest', () => {
    const tab2 = [1, 2, 3, 4];
    const otab2 = rx.from(tab2);
    otab2.pipe(
        op.filter((x: number) => x % 2 === 0),
    ).subscribe((x: number) => {
        console.log(x);
    });
});

describe('ListTest', () => {
    const tab1 = [1, 2, 3];
    let otab = rx.of(tab1);
    otab = otab.pipe(op.map((l) => {
        l.push(4);
        return l;
    }));
    otab.subscribe((value) => {
        console.log(value);
    });
});

describe('ReduceTest', () => {
    const tab1 = [1, 2, 3, 4];
    const otab = rx.from(tab1);
    otab.pipe(
        op.reduce((x: number, y) => x + y)
    ).subscribe((value) => {
        it('should be 10', () => expect(value).toBe(10) );
    });
});







