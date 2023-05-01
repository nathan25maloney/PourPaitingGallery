import { Component, HostListener } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private shoppingCartService: ShoppingCartService) { }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event) {
    // Remove items from shopping cart before page is unloaded
    this.shoppingCartService.clearCart();
  }

  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    // Set all items in shopping cart as available before page is unloaded
    this.shoppingCartService.clearCart();
  }
}
