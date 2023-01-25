import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'} ),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {
  constructor() { }

  menuItemState = 'ready'

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()

  ngOnInit(): void {

  }
  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
