import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  @Output() postCreate = new EventEmitter();
  ngOnInit(): void {
  }
  enteredTitle='';
  enteredValue='';
  newPost="No content";
  onAddPost(){

    const post = {
      title:this.enteredTitle,
      content : this.enteredValue
    };
    this.newPost= this.enteredValue;
  }
}
