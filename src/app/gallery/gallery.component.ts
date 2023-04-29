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
  public cards: Array<IArtCard>;

  constructor(public route: ActivatedRoute, private ArtCardService: ArtCardService) { 
    this.route.paramMap.subscribe({
      next: (params) => {
        this.artId = params.get("id");
      }
    })
  }

  ngOnInit() {
    this.ArtCardService.getArtCards().subscribe((cards) => {
      this.cards = cards.filter(card => card.isAvailable)
    });
  }

  get singleArt() {
    if (this.cards) {
      return this.cards.find(obj => obj.artId === this.artId);
    }
    return null;
  }

  get sortedList() {
    return this.cards
  }

  onLikesUpdated(updatedCard) {
    this.ArtCardService.updateArtCard(updatedCard);
  }

  ngOnDestroy() {
    const cards = this.ArtCardService.getArtCards();
    localStorage.setItem('cartItems', JSON.stringify(cards));
  }
}

