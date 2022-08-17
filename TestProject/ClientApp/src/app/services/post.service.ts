import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private Rooturl = 'https://swapi.dev/api';
  private Shipsurl = 'https://swapi.dev/api/starships';
  private Planetsurl = 'https://swapi.dev/api/planets';
  private Speciesurl = 'https://swapi.dev/api/species';
  private Filmsurl = 'https://swapi.dev/api/films';
  private Peopleurl = 'https://swapi.dev/api/people';
  private Vehiclesurl = 'https://swapi.dev/api/vehicles';

  constructor(private httpClient: HttpClient) { }

  //getRoot() {
  //  console.log("urlfetch: " + this.httpClient.get(this.Rooturl))
  //  return this.httpClient.get(this.Rooturl);
  //}
  getShips() {
    
    return this.httpClient.get(this.Shipsurl);
  }

  getPlanets() {
   
    return this.httpClient.get(this.Planetsurl);
  }

  getSpecies() {

    return this.httpClient.get(this.Speciesurl);
  }

  getFilms() {

    return this.httpClient.get(this.Filmsurl);
  }

  getPeople() {

    return this.httpClient.get(this.Peopleurl);
  }

  getVehicles() {

    return this.httpClient.get(this.Vehiclesurl);
  }
}
