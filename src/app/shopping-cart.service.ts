import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private items = [];

  itemsChanged = new EventEmitter<any[]>();

  constructor(private http: HttpClient) {
    // Call checkExpiredItems() every 5 minutes
    setInterval(() => {
      this.checkExpiredItems();
    }, 5 * 60 * 1000);
  }

  addItem(item) {
    if (!this.hasItem(item)) {
      const cartItem = { artId: item.artId, addedTime: Date.now() };
      localStorage.setItem(item.artId, JSON.stringify(cartItem));
      this.items.push(item);
      this.updateArtCard(item, false);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items.forEach(element => {
      this.removeItem(element);
    });
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (this.hasItem(item)) {
      this.items.splice(index, 1);
      localStorage.removeItem(item.artId); // remove expired item from localStorage
      this.updateArtCard(item, true);
    }
  }

  hasItem(item) {
    console.log(item.artId)
    console.log(this.items)
    return this.items.findIndex(obj => obj.artId === item.artId) !== -1;
  }


  updateArtCard(item, isAvailable){
    const formData = new FormData();
    formData.append('ArtId', item.artId)
    formData.set('isAvailable', isAvailable.toString());
    const url = `/api/ArtProduct`;
    this.http.put(url, formData).subscribe((res) => {
      this.itemsChanged.emit(this.items);
    });
  }

  // Function to check for and remove expired items from the cart
  private checkExpiredItems() {
    // Get all items from localStorage
    const cartItems = Object.keys(localStorage).map(key => {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch (e) {
        console.warn(`Skipping invalid cart item with key ${key}: ${localStorage.getItem(key)}`);
        return null;
      }
    }).filter(item => item !== null);

    // Check each item for expiration
    cartItems.forEach(item => {
      const elapsedMinutes = (Date.now() - item.addedTime) / (1000 * 60); // calculate elapsed time in minutes
      if (elapsedMinutes > 2) { // if elapsed time is greater than 30 minutes
        item.isAvailable = true; // set isAvailable back to true
        localStorage.removeItem(item.artId); // remove expired item from localStorage
        this.updateArtCard(item, true); // update the item's availability in the database
      }
    });
  }

}
