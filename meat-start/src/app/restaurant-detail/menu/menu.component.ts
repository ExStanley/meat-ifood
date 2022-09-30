
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../menu-item/menu-item.model';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private service: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.menu = this.service.menuOfRestaurant(this.route.snapshot.params['id'])
  }
  addMenuItem(item: MenuItem){
    console.log(item)
  }

}
