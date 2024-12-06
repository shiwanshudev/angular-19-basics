import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  postService = inject(PostService);
  posts: any[] = [];

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postService.getPosts().subscribe((result: any) => {
      debugger;
      this.posts = result;
    });
  }
}
