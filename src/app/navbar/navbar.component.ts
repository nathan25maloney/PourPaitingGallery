import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  itemsInCart = [];

  constructor(public router: Router, private shoppingCartService: ShoppingCartService) {
    this.itemsInCart = this.shoppingCartService.getItems();
    this.shoppingCartService.itemsChanged.subscribe(
      items => this.itemsInCart = items
    );
  }
  
  getNumItemsInCart() {
    return this.itemsInCart.length;
  }

}
