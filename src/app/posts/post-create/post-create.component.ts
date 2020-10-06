import { PostService } from './../post.service';
import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
//import { format } from 'path';
import { Post } from '../post.model';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postsService : PostService) { }

  @Output() postCreate = new EventEmitter<Post>();
  ngOnInit(): void {
  }
  enteredTitle='';
  enteredValue='';
  onAddPost(form : NgForm){
    if(form.invalid){
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();

    const post : Post = {
      title: form.value.title,
      content : form.value.content
    }
    this.postCreate.emit(post);


  }
}
