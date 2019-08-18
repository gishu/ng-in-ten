import { Component } from '@angular/core';
import { LikeEventArgs } from './likes/likes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-in';

  onLike(args: LikeEventArgs) {
    console.log(args);
  }
}
