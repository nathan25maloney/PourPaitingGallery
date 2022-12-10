import { Component, OnDestroy, OnInit} from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy{

  itemsInCart = [];

  constructor(private shoppingCartService: ShoppingCartService) {  }

  ngOnInit() {
    this.itemsInCart = this.shoppingCartService.getItems();
  }

  ngOnDestroy() {
    const itemsInCart = this.shoppingCartService.getItems();
    localStorage.setItem('cartItems', JSON.stringify(itemsInCart));
  }

}
