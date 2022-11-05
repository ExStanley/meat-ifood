import { state, style, transition, trigger, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  animations: [
    trigger('restaurantAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'} ),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  restaurantState = 'ready'

  @Input() restaurant: Restaurant
  constructor() { }

  ngOnInit(): void {
  }

}
