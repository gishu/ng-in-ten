import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  users: any;

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.getUsers()
      .subscribe(resp => {
        console.log(resp); // resp.status http status
        this.users = resp.body;
      });

  }

  // deleteUser(user) {
  //   this.userSvc.deleteUser(user.id)
  //     .subscribe(resp => console.log(resp),
  //       error => console.log(error));

  // }

}
