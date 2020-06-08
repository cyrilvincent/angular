let s = 'Hello, World!';
console.log(s);

let tab: number[] = [1, 5, 9, 12, 22, 53, 99, -1, -99, 0];
for (const i of tab) {
    console.log(i);
}

function max(l: Array<number>): number {
    let res: number = l[0];
    for (let i = 1; i < l.length; i++) {
        if (l[i] > res) {
            res = l[i];
        }
    }
    return res;
}

console.log(max(tab));

