import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getShips().subscribe(response => {
      this.posts = response;
      console.log("res: " + response);
    });
  }
}
