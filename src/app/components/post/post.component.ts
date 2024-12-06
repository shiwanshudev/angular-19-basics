import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormsModule } from '@angular/forms';
import { PostModel } from '../../model/Post';

@Component({
  selector: 'app-post',
  imports: [FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  postService = inject(PostService);
  posts: any[] = [];

  formInput: PostModel = new PostModel();

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postService.getPosts().subscribe((result: any) => {
      debugger;
      this.posts = result;
    });
  }

  onSubmit() {
    this.postService.createPost(this.formInput).subscribe((result: any) => {
      debugger;
      alert('success!');
    });
  }
}
