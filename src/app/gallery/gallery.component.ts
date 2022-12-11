import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArtCard } from 'src/app/models/IArtCard'
import { GalleryArtcardComponent } from '../gallery-artcard/gallery-artcard.component';
import { ArtCardService } from '../art-card.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy  {

  public artId: string;

  constructor(public route: ActivatedRoute, private ArtCardService: ArtCardService) { 
    this.route.paramMap.subscribe({
      next: (params) => {
        this.artId = params.get("id");
      }
    })
  }
  
  get singleArt() {
    return this.sortedList.find(obj => obj.id === Number(this.artId));
  }

  public cards: Array<IArtCard>;

  get sortedList() {
    return this.ArtCardService.getArtCards()
  }

  onLikesUpdated(updatedCard) {
    this.ArtCardService.updateArtCard(updatedCard);
  }

  ngOnInit() {
    this.cards = this.ArtCardService.getArtCards();
  }

  ngOnDestroy() {
    const cards = this.ArtCardService.getArtCards();
    localStorage.setItem('cartItems', JSON.stringify(cards));
  }
  
  
}
