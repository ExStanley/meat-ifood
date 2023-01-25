import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden';
  restaurants: Restaurant[];
  searchForm: FormGroup
  searchControl: FormControl

  constructor(private restaurantsService: RestaurantsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
    this.searchControl.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchTerm =>
            this.restaurantsService.get(searchTerm)
        ),
        catchError(_ => from('no more requests!!!'))
    ).subscribe((resultado: Restaurant[])=> {
      this.restaurants = resultado
    })

    this.restaurantsService.get().subscribe((resultado: Restaurant[])=> {
      this.restaurants = resultado
    })
  }
  toggleSearch(){
    this.searchBarState = this.searchBarState == 'hidden'? 'visible' : 'hidden'
  }
}
