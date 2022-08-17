import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://swapi.dev/api/starships';

  constructor(private httpClient: HttpClient) { }

  getShips() {
    console.log("response: " + this.httpClient.get(this.url));
    return this.httpClient.get(this.url);
  }
}
