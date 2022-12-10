import { Component, Input, OnInit } from '@angular/core';
import { IArtCard } from '../models/IArtCard';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-single-artcard',
  templateUrl: './single-artcard.component.html',
  styleUrls: ['./single-artcard.component.scss']
})
export class SingleArtcardComponent {

  @Input() singleArt!: IArtCard;
  
  constructor(private shoppingCartService: ShoppingCartService) {}

  hasItem() {
    return this.shoppingCartService.hasItem(this.singleArt);
  }

  addToCart() {
    this.shoppingCartService.addItem(this.singleArt);
  }

}
