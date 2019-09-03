export class VideoGame {
    id: number;
    title: string;
    editor: string;
    year: number;
    consoles: string[];
    play: string;
    nbView = 0;
}

export class Cart {

    games: VideoGame[] = [];

    add(game: VideoGame): void {
        this.games.push(game);
        console.log(game.title + ' added to cart');
    }
}
