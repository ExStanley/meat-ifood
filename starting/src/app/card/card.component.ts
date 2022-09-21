import { Product } from './product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'devbr-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() prod: Product

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    console.log(`Produto: ${this.prod.name}`)
  }

}
