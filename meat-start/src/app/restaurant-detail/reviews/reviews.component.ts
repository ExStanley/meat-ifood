import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>
  constructor(private service: RestaurantsService, private route: ActivatedRoute)
  {

  }

  ngOnInit(): void {
    this.reviews = this.service.reviewsOfRestaurant(this.route.snapshot.params['id'])
  }

}
