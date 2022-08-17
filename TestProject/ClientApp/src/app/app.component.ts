import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  //ships: any;
  //planets: any;
  constructor(private service: PostService) { }

  ngOnInit() {
    //this.service.getShips().subscribe(response => { this.ships = response; });
    //this.service.getPlanets().subscribe(response => { this.planets = response; });
  }
}
