import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css']
})

export class SwapiComponent implements OnInit {
  ships: any;
  aplanets: any;
  aspecies: any;
  afilms: any;
  apeople: any;
  avehicles: any;
  constructor(private service: PostService) { }

  ngOnInit() {
    //this.service.getRoot().subscribe(response => { this.root = response; });
    this.service.getShips().subscribe(response => { this.ships = response; });
    this.service.getPlanets().subscribe(response => { this.aplanets = response; });
    this.service.getSpecies().subscribe(response => { this.aspecies = response; });
    this.service.getFilms().subscribe(response => { this.afilms = response; });
    this.service.getPeople().subscribe(response => { this.apeople = response; });
    this.service.getVehicles().subscribe(response => { this.avehicles = response; });
  }
}
