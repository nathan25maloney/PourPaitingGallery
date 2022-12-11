import { Injectable, EventEmitter  } from '@angular/core';
import { IArtCard } from './models/IArtCard';

@Injectable({
  providedIn: 'root'
})
export class ArtCardService {
  private artCards: IArtCard[] = [
    {
      id: 1,
      filename: 'IMG-1949',
      name: `Bumfuzzle`,
      likes: 15,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 2,
      filename: 'IMG-1950',
      name: `Everywhen`,
      likes: 14,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0      
    },{
      id: 3,
      filename: 'IMG-1951',
      name: `Erf`,
      likes: 13,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0      
    },{
      id: 4,
      filename: 'IMG-1955',
      name: `Hullaballoo`,
      likes: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0      
    },{
      id: 5,
      filename: 'IMG-1956',
      name: `Meldrop`,
      likes: 11,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0      
    },{
      id: 6,
      filename: 'IMG-1957',
      name: `Obelus`,
      likes: 10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 7,
      filename: 'IMG-1958',
      name: `Sozzled`,
      likes: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 8,
      filename: 'IMG-1962',
      name: `Bumbershoot`,
      likes: 3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 9,
      filename: 'IMG-1964',
      name: `Titter`,
      likes: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 10,
      filename: 'IMG-1970',
      name: `Smicker`,
      likes: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 11,
      filename: 'IMG-1971',
      name: `Cleek`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 12,
      filename: 'IMG-1972',
      name: `Salopettes`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 13,
      filename: 'IMG-1973',
      name: `Bibliokept`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 14,
      filename: 'IMG-1974',
      name: `Lollygag`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 15,
      filename: 'IMG-1976',
      name: `Accubation`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 16,
      filename: 'IMG-1977',
      name: `Bamboozled`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 17,
      filename: 'IMG-1978',
      name: `Flabbergast`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 18,
      filename: 'IMG-1980',
      name: `Foppish`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 19,
      filename: 'IMG-1981',
      name: `Cattywampus`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 20,
      filename: 'IMG-1982',
      name: `Noob`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 21,
      filename: 'IMG-1983',
      name: `Schmooze`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 22,
      filename: 'IMG-1984',
      name: `Finifugal`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 23,
      filename: 'IMG-1985',
      name: `Smaze`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 24,
      filename: 'IMG-1986',
      name: `Skirl`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 25,
      filename: 'IMG-1987',
      name: `Waesucks`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 26,
      filename: 'IMG-1988',
      name: `Widdershins`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 27,
      filename: 'IMG-1990',
      name: `Blubber`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 28,
      filename: 'IMG-1991',
      name: `Festooned`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 29,
      filename: 'IMG-1992',
      name: `Gobbledygook`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 30,
      filename: 'IMG-1993',
      name: `Popple`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 31,
      filename: 'IMG-1994',
      name: `Hodgepodge`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 32,
      filename: 'IMG-1995',
      name: `Ramshackle`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 33,
      filename: 'IMG-1996',
      name: `Wishy-washy`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 34,
      filename: 'IMG-1997',
      name: `Flummoxed`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0
    },{
      id: 35,
      filename: 'IMG-1998',
      name: `Collywobbles`,
      likes: 0,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Id interdum velit laoreet id donec ultrices. Ultrices sagittis orci a scelerisque purus semper eget duis at. Eu mi bibendum neque egestas. Elementum integer enim neque volutpat ac tincidunt. Diam ut venenatis tellus in. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.',
      hasVoted: 0      
    }
  ];

  favoritesChanged = new EventEmitter<IArtCard[]>();

  constructor() {}

  getArtCards() {
    return this.artCards.sort((a,b) => b.likes - a.likes);
  }

  addToArtCard(artCard: IArtCard) {
    this.artCards.push(artCard);
    console.log(this.artCards)
    this.favoritesChanged.emit(this.artCards);
  }

  updateArtCard(artCard: IArtCard) {
    const index = this.artCards.findIndex(obj => obj.id === artCard.id);
    this.artCards[index] = artCard;
    this.favoritesChanged.emit(this.artCards);
  }

  removeFromArtCard(artCard: IArtCard) {
    const index = this.artCards.indexOf(artCard);
    if (index !== -1) {
      this.artCards.splice(index, 1);
      this.favoritesChanged.emit(this.artCards);
    }
  }
}
