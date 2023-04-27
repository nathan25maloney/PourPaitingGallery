import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild  } from '@angular/core';
import { ArtCardService } from '../art-card.service';
import { IArtCard } from '../models/IArtCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public cards: Array<IArtCard>;
  @ViewChild('imageContainer') imageContainer!: ElementRef;

  constructor(private artCardService: ArtCardService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.artCardService.getArtCards().subscribe((cards: Array<IArtCard>) => {
      this.cards = cards;
    });
  }

  ngAfterViewInit(): void {
    const el = this.imageContainer.nativeElement;
    // Set the background image
    this.renderer.setStyle(el, 'background-image', `url(${this.getRandomImage()})`);
  }

  getRandomImage(): string {
    // Get a random image from your public cards array
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    return `data:image/jpeg;base64,${this.cards[randomIndex].imgBytes}`;
  }

}
