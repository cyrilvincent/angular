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


describe('MapOfTest', () => {
    const tab1 = [1, 2, 3];
    const otab = rx.of(tab1);
    otab.pipe(
        op.map((x: Array<number>) => x.push(4)),
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

function* filterAsync(self, predicatfn) {
    for (const elem of self) {
        if (predicatfn(elem)) {
            yield elem;
        }
    }
}

function* mapAsync(self, mapfn) {
    for (const elem of self) {
        yield mapfn(elem);
    }
}

function* reduceAsync(self, reduceFn, initialValue = 0) {
    let acc = initialValue;
    for (const cur of self) {
        acc = reduceFn(acc, cur);
    }
    return acc;
}

const res = filterAsync([1, 2, 3, 4, 5, 6], (x) => x % 2 === 0 );
const res2 = mapAsync(res, (x) => x * 10);
for (const elem of res2) {
    console.log(elem);
}


describe('FilterAndMapTest', () => {
    const tab2 = [1, 2, 3, 4];
    const otab2 = rx.from(tab2);
    otab2.pipe(
        op.filter((x: number) => x % 2 === 0),
        op.map((x: number) => x * 10),
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

describe('Reduce2Test', () => {
    const tab1 = [1, 2, 3, 4];
    const otab = rx.from(tab1);
    otab.pipe(
        op.reduce((x: number, y) => x * y, 1)
    ).subscribe((value) => {
        it('should be 24', () => expect(value).toBe(24) );
    });
});








