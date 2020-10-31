import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<any> = [];
  constructor(private http: HttpClient) { }

  addToCart(product): void {
    this.items.push(product);
  }

  getItems(): Array<any> {
    return this.items;
  }

  clearCart(): Array<any> {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): any {
    return this.http.get('/assets/shipping.json');
  }
}
