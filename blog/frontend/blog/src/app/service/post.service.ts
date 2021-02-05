import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/Post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  protected url: string = "http://localhost:3000/"

  /*httoOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  }*/

  constructor( private http: HttpClient) { }



  getPosts() : Observable<Post[]> {
    return this.http
      .get<Post[]>(this.url + "posts")
  }

  postMsg(post: Post) : Observable<Post> {
    return this.http
      .post<Post>(this.url + "posts", post)
  }

}


