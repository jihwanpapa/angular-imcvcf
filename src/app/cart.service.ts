import { Injectable } from '@angular/core';

@Injectable(
  {provideIn: 'root'}
)
export class CartService {

  items = []; //items 프로퍼티를 선언

  addToCart(product) {
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}