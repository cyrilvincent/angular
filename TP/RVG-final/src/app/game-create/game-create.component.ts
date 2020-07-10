import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../shared/video-game';
import { GameService } from '../shared/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  game: VideoGame = new VideoGame();

  constructor(private gameService: GameService,
              private router: Router) { }

  ngOnInit() {
    this.game.year = 1970;
    this.game.consoles = [];
    this.game.nbView = 0;
    this.game.play = '';
    this.game.editor = '';
    this.game.id = Math.floor(Math.random() * 100) + 1;
    this.game.title = '';
  }

  add(): void {
    this.gameService.addGame(this.game)
      .subscribe(_ => {
        this.router.navigate(['/games']);
      });
  }
}
