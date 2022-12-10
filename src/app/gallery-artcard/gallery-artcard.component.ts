import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArtCard } from '../models/IArtCard';

@Component({
  selector: 'app-gallery-artcard',
  templateUrl: './gallery-artcard.component.html',
  styleUrls: ['./gallery-artcard.component.scss']
})
export class GalleryArtcardComponent {

  constructor() { }

  @Input() singleCard!: IArtCard;
  
  @Output() likesUpdated = new EventEmitter<any>();

  hasVoted = 0;

  incrementLikes() {
    if (this.hasVoted === -1) {
      this.singleCard.likes +=2;
    } else {
      this.singleCard.likes++;
    }
    this.hasVoted = 1;
    this.likesUpdated.emit(this.singleCard);
  }

  decrementLikes() {
    if (this.hasVoted === 1) {
      this.singleCard.likes -= 2;
    } else {
      this.singleCard.likes--;
    }
    this.hasVoted = -1;
    this.likesUpdated.emit(this.singleCard);
  }
  

}
