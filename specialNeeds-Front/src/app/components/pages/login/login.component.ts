import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { APIService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../../../../../node_modules/bootstrap/dist/css/bootstrap.css',
  ],
})
export class LoginComponent implements OnInit {
  isLogin: boolean = true;
  email = '';
  //data to submit

  constructor(public data: DataService, public api: APIService) {}

  ngOnInit(): void {}

  changeForm(n: number): void {
    if (n == 0) this.isLogin = false;
    else this.isLogin = true;
  }

  createUser(){
    this.data.user.email = this.email;
    this.api.createUsers(this.data.createClient);
  }

  loginUser(){
    this.data.user.email = this.data.login.email
    this.api.login(this.data.login.email, this.data.login.password)
  }
}
