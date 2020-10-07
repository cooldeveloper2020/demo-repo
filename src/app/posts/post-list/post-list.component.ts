import { Subject, Subscription } from 'rxjs';
import { PostService } from './../post.service';
import { Post } from './../post.model';

import { Component, OnInit, Input,OnDestroy } from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  constructor(public postSservice : PostService) { }
  private postSubcription : Subscription;
  /*posts = [
    {title: "First Post" , content: "This is the first post content"},
    {title: "Second Post" , content: "This is the second post content"},
    {title: "Third Post" , content: "This is the third post content"}
  ]*/
  @Input() posts : Post[] = []
  ngOnInit(): void {
    this.posts = this.postSservice.getPosts();
    this.postSubcription = this.postSservice.getPostUpdatedListener().subscribe((postsReceived : Post[])=>{
        this.posts = postsReceived;
      });
  }
ngOnDestroy(){
  this.postSubcription.unsubscribe();
}

}
