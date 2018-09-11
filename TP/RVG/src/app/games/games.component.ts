import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../video-game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: VideoGame[];
  selectedGame: VideoGame;
  newGame: VideoGame = new VideoGame();


  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.getGames();
  }

  onSelect(game: VideoGame): void {
    this.selectedGame = game;
  }

  getGames(): void {
    // this.games = this.gameService.getGames();
    this.gameService.getGames().subscribe(games => this.games = games);
  }

  add(): void {
    this.newGame.consoles = [];
    this.newGame.nbView = 1;
    this.newGame.play = '';
    this.gameService.addGame(this.newGame)
      .subscribe(_ => {
        this.games.push(this.newGame);
      });
    this.newGame = new VideoGame();
  }

  delete(game: VideoGame): void {
    this.games = this.games.filter(g => g !== game);
    this.gameService.deleteGame(game.id).subscribe();
  }
}
