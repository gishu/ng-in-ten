import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css'],
  styles:[
    `
    .press {
      color: white;
  }
  
  button {
      background-color: darkgrey;
  }
      `
  ]
  
  
})
export class LikesComponent implements OnInit {

  // alias for property so that field rename doesn't break the html
  @Input('likeCount')
  private likes = 0;

  @Output('likedByUser')
  private likedEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get description() {
    return (this.likes > 0 ? `Liked by ${this.likes} users` : `Like`)
  }

  like() {
    this.likes++;
    this.likedEmitter.emit({ likes: this.likes });
  }

}

export interface LikeEventArgs {
  likes: number;
}
