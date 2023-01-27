import { MET_API } from './../app.api';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService,
    private http: HttpClient,
    ) {}

  cartItems(): CartItem[] {
    return this.cartService.items;
  }
  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }
  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem){
    this.cartService.removerItem(item)
  }
  itemsValue(): number {
    return this.cartService.total()
  }

  checkOrder(order: Order): Observable<string>{
    return this.http.post<Order>(`${MET_API.url}/orders`, order)
    .pipe(
      map(order => order.id)
    )
  }

  // checkOrder(order: Order): Observable<string>{
  //   const options = {
  //     headers: new HttpHeaders().append('Content-Type', 'application/json')
  //   }
  //   return this.http.post(`${MET_API.url}/orders`, JSON.stringify(order), options)
  //   .pipe(
  //     map(response => JSON.stringify(response)),
  //     map(order => JSON.parse(order).id)
  //     )
  // }

  clear(){
    this.cartService.clear()
  }
}
