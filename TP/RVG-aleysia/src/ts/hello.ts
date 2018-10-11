let s = 'Hello, World!';
console.log(s);
let tab: number[] = [1, 5, 9, 12, 22, 53, 0, -1, -99, 99];
for (const i of tab) {
    console.log(i);
}
let max: number = tab[0];
for (let i = 1; i < tab.length; i++) {
    if (tab[i] > max) {
        max = tab[i];
    }
}
console.log(max);

