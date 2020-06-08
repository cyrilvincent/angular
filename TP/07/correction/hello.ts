let s = 'Hello, World!';
console.log(s);
let tab: number[] = [1, 5, 9, 12, 22, 53, 0, -1, -99, 99];
for (const i of tab) {
    console.log(i);
}

function max(tab: number[]): number {
    let res: number = tab[0];
    for (let i = 1; i < tab.length; i++) {
        if (tab[i] > res) {
            res = tab[i];
        }
    }
    return res;
}

console.log(max(tab));

