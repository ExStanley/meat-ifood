import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  constructor() { }

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()

  ngOnInit(): void {

  }
  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
