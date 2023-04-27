import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArtCard } from '../models/IArtCard';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery-artcard',
  templateUrl: './gallery-artcard.component.html',
  styleUrls: ['./gallery-artcard.component.scss']
})
export class GalleryArtcardComponent {

  constructor(private http: HttpClient) { }

  @Input() singleCard!: IArtCard;
  
  @Output() likesUpdated = new EventEmitter<any>();


  incrementLikes() {
    
    if (this.singleCard.hasVoted === -1) {
      this.singleCard.artScore +=2;
    } else if(this.singleCard.hasVoted !== 1) {
      this.singleCard.artScore++;
    }
    this.singleCard.hasVoted = 1;
    this.updateScore(this.singleCard);
  }

  decrementLikes() {
    if (this.singleCard.hasVoted === 1) {
      this.singleCard.artScore -= 2;
    } else if(this.singleCard.hasVoted !== -1){
      this.singleCard.artScore--;
    }
    this.singleCard.hasVoted = -1;
    this.updateScore(this.singleCard);
  }

  updateScore(singleCard) {
    const formData = new FormData();
    formData.append('ArtId', this.singleCard.artId)
    formData.set('ArtScore', this.singleCard.artScore.toString());
    const url = `/api/ArtProduct`;
    this.http.put(url, formData).subscribe((res) => {
      this.likesUpdated.emit(this.singleCard);
    });
  }
  

}
