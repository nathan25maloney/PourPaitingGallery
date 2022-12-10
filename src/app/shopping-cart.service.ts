import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private items = [];

  itemsChanged = new EventEmitter<any[]>();

  constructor() {}

  addItem(item) {
    if (!this.hasItem(item)) {
      this.items.push(item);
      this.itemsChanged.emit(this.items);
    }
  }

  getItems() {
    return this.items;
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.itemsChanged.emit(this.items);
    }
  }

  hasItem(item) {
    return this.items.findIndex(obj => obj.id === item.id) !== -1;
  }

  setItems(items) {
    this.items = items;
    this.itemsChanged.emit(this.items);
  }
}
