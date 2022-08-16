import { Component, HostBinding, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurants';

import { RestaurantsService } from '../../services/restaurants.service'

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: any = []
  
  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe(
      res => {
        this.restaurants = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  deleteRestaurant(id: string){
    this.restaurantService.deleteRestaurant(id)
      .subscribe(
        res => {
          console.log(res);
          this.getRestaurants();
        },
        err => console.log(err)
      )
  }

}
