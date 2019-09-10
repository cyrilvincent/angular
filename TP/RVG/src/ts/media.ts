export class Editor {
    id: number;
    name: string;
}

interface Author {
    id: number;
    firstName: string;
    lastName: string;
}

interface IMedia  {
    id: number;
    title: string;
    price: number;
    editor: Editor;
    authors: Array<Author>;
}

abstract class Media implements IMedia {
    private _id: number;
    private _title: string;
    private _price: number;
    private _editor: Editor;
    private _authors: Array<Author> = new Array<Author>();

    public constructor(id: number, title: string, price: number = -1) {
        this._id = id;
        this._title = title;
        this._price = price;
    }

    // public constructor(private id:number, private title:string, private price:number) {}

    public abstract getNetPrice(): number;

    get id(): number { return this._id; }
    set id(id: number) { this._id = id; }

    get title(): string { return this._title; }
    set title(title: string) { this._title = title; }

    get price(): number { return this._price; }
    set price(price: number) { this._price = price; }

    get editor(): Editor { return this._editor; }
    set editor(e: Editor) { this._editor = e; }

    get authors(): Array<Author> { return this._authors; }
    set authors(authors: Array<Author>) { this._authors = authors; }
}

export class Book extends Media {
    private _nbPage: number;

    public constructor(id: number, title: string, price: number = -1, nbPage: number = 0) {
        super(id, title, price);
        this._nbPage = nbPage;
    }

    get nbPage(): number { return this._nbPage; }
    set nbPage(nbPage: number) { this._nbPage = nbPage; }

    public getNetPrice(): number {
        return this.price * 1.05;
    }
}

export class Cd extends Media {
    nbTrack: number;

    public getNetPrice(): number {
        return this.price * 1.2;
    }
}

export class VideoGame extends Media {
    pegi: number;

    public getNetPrice(): number {
        return this.price * 1.2;
    }
}

export class Cart {

    medias: Array<Media> = new Array<Media>();

    add(m: Media): void {
        this.medias.push(m);
    }

    getTotalNetPrice(): number {
        let total = 0;
        for (const m of this.medias) {
            total += m.getNetPrice();
        }
        return total;
    }
}

export interface VideoGameTO {
    id: number;
    title: string;
    editor: string;
    year: number;
    consoles: string[];
    play: string;
}

const editor: Editor = new Editor();
editor.id = 1;
editor.name = 'ENI';
const author: Author = {id: 1, firstName: 'Cyril', lastName: 'Vincent'};
const to: VideoGameTO = { id: 1,
                            title: 'Space Invaders',
                            editor: 'Taito',
                            year: 1978,
                            consoles: ['Atari VCS', 'MSX'],
                            play: 'http://www.playretrogames.com/3022-space-invaders-the-original-game'
                        };
const cart: Cart = new Cart();
const book: Book = new Book(0, 'Typescript', 10);
const game: VideoGame = new VideoGame(1, 'Space Invaders', 10);
cart.add(book);
cart.add(game);
console.log(cart.getTotalNetPrice());





