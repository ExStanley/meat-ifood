import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private service: ShoppingCartService) { }
  ngOnInit(): void {
  }

  items(): any[]{
    return this.service.items;
  }

  total(): number {
    return this.service.total()
  }

  clear(): void{
    this.service.clear()
  }

  removeItem(item: any){
    this.service.removerItem(item)
  }

  addItem(item: any){
    this.service.addItem(item)
  }

}
