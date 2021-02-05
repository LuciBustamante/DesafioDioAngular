import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post.model';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


  listPost: Post[] = [];
  posts: Post = new Post;
  result$!: Observable<any>;
  searchName = '';
  nome = '';

  constructor(private postService: PostService) {}


  ngOnInit(): void {
    this.findPost();
  }

  findPost() {
    this.postService
      .getPosts()
      .subscribe((data: Post[])=> this.listPost = data)
  }

  saveMsg() {
    this.postService
      .postMsg(this.posts)
      .subscribe((data : Post) => {
        this.posts = data
        location.assign('/feed')
      })
    console.log(this.posts)
  }

  search() {
    this.searchName = this.nome;
  }

  searchClear() {
    this.searchName = '';
    this.nome = ';'
  }
}



