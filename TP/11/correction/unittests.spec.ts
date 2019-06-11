import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {VideoGame, Book, Cart, Editor} from './media';

describe('FirstSimpleTest', () => {
  let i = 1;
  i = i + 1;
  it('should be 2', () => expect(i).toBe(2) );
});

describe('VideoGame', () => {
  const game = new VideoGame(1, 'Space Invaders', 10);
  it('Net price', () => expect(game.getNetPrice()).toBe(12.0) );
});

describe('Cart', () => {
  const cart: Cart = new Cart();
  const book: Book = new Book(0, 'Typescript', 10);
  const game: VideoGame = new VideoGame(1, 'Space Invaders', 10);
  cart.add(book);
  cart.add(game);
  it('Net price', () => expect(cart.getTotalNetPrice()).toBe(22.5) );
});

describe('Editor', () => {
  const editorName = 'ENI';
  const editor: Editor = new Editor();
  editor.name = editorName;
  it('Name', () => expect(editor.name).toBe(editorName) );
});
