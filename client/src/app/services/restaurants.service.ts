import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Restaurant } from '../models/Restaurants'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get(`${this.API_URI}/restaurantes`);
  }

  getRestaurant(id: string) {
    return this.http.get(`${this.API_URI}/restaurantes/${id}`);
  }

  saveRestaurant(restaurant: Restaurant) {
    return this.http.post(`${this.API_URI}/restaurantes`, restaurant);
  }

  deleteRestaurant (id: string) {
    return this.http.delete(`${this.API_URI}/restaurantes/${id}`);
  }

  updateRestaurant (id: string|undefined|number, updatedRestaurant: Restaurant): Observable<Restaurant> {
    return this.http.put(`${this.API_URI}/restaurantes/${id}`, updatedRestaurant)
  }

}
