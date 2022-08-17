import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css']
})

export class SwapiComponent implements OnInit {

  posts: any;

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getShips().subscribe(response => {
      this.posts = response;
      console.log("res: " + response);
    });
  }
}
