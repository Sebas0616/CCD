import { Component, HostBinding, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurants';
import { ActivatedRoute ,Router } from '@angular/router';

import { RestaurantsService } from '../../services/restaurants.service';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  restaurant: Restaurant = {
    Id: 0,
    Nombre: '',
    Imagen: ''
  };

  edit: boolean = false;

  constructor(private restaurantService: RestaurantsService, private router: Router, private activedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.restaurantService.getRestaurant(params.id)
        .subscribe(
          res => {
            this.restaurant = res;
            //console.log(res);
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  updateRestaurant () {
    this.restaurantService.updateRestaurant(this.restaurant.Id ,this.restaurant)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/restaurantes'])
        },
        err => console.log(err)
      )
  }

  saveNewRestaurant(){
    this.restaurantService.saveRestaurant(this.restaurant)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/restaurantes']);
        },
        err => console.error(err)
      )
  }

}
