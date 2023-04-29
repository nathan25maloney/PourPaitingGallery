import { Injectable, EventEmitter  } from '@angular/core';
import { IArtCard } from './models/IArtCard';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtCardService {
  private artCards: IArtCard[] = [];

  favoritesChanged = new EventEmitter<IArtCard[]>();

  constructor(private http: HttpClient) {}

  getArtCards(): Observable<IArtCard[]> {
    return this.http.get<IArtCard[]>('/api/ArtProduct').pipe(
      map(artCards => artCards.sort((a,b) => b.artScore - a.artScore)),
      map(artCards => artCards.map(card => ({ ...card, hasVoted: 0, isEditable: false }))), // add hasVoted property to each card
      tap(sortedArtCards => this.artCards = sortedArtCards)
    );
  }
  
  addToArtCard(artCard: IArtCard) {
    this.artCards.push(artCard);
    this.favoritesChanged.emit(this.artCards);
  }

  updateArtCard(artCard: IArtCard) {
    const index = this.artCards.findIndex(obj => obj.artId === artCard.artId);
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
