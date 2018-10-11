import * as rx from 'rxjs';
import * as op from 'rxjs/operators';

describe('OfTest', function () {
    const myObservable = rx.of(42);
    myObservable.subscribe((value) => {
        console.log(value);
        it('should be 42', () => expect(value).toBe(42) );
    });
});

describe('PipeTest', function () {
    const o = rx.of(42);
    o.pipe(
        op.tap((value) => console.log('Avant : ' + value)),
        op.map((value: number) => value + 1),
        op.tap((value) => console.log('Après : ' + value)),
    ).subscribe((value: number) => {
        it('should be 43', () => expect(value).toBe(43) );
    });
});

describe('MapTest', function () {
    const tab1 = [1, 2, 3];
    const otab = rx.from(tab1);
    otab.pipe(
        op.map((x: number) => x * 10),
    ).subscribe((x: number) => {
        console.log(x);
    });
});

describe('FilterTest', function () {
    const tab2 = [1, 2, 3, 4];
    const otab2 = rx.from(tab2);
    otab2.pipe(
        op.filter((x: number) => x % 2 === 0),
    ).subscribe((x: number) => {
        console.log(x);
    });
});






