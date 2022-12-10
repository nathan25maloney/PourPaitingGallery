import { Component, Input } from '@angular/core';
import { IArtCard } from '../models/IArtCard';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {

  @Input() item!: IArtCard;

  constructor(private shoppingCartService: ShoppingCartService) {}

  removeItem() {
    this.shoppingCartService.removeItem(this.item);
  }

}
