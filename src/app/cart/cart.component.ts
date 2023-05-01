import { Component, OnDestroy, OnInit} from '@angular/core';
import { IArtCard } from '../models/IArtCard';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy{

  itemsInCart: IArtCard[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {  }

  ngOnInit() {
    this.itemsInCart = this.shoppingCartService.getItems();
  }

  calculateSubtotal() {
    let subtotal = 0;
    for (const item of this.itemsInCart) {
      subtotal += item.artPrice;
    }
    return subtotal;
  }

  calculateTotal() {
    const tax = 0; // Replace with actual tax rate
    const subtotal = this.calculateSubtotal();
    const total = subtotal * (1 + tax);
    return total;
  }


  ngOnDestroy() {
    const itemsInCart = this.shoppingCartService.getItems();
    localStorage.setItem('cartItems', JSON.stringify(itemsInCart));
  }

}
