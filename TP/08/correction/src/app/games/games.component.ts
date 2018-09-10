import { Component, OnInit } from '@angular/core';
import { VideoGame, Cart } from '../video-game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  game: VideoGame = {
    id: 1,
    title: 'Space Invaders',
  };


  constructor() { }

  ngOnInit() {
  }


}
