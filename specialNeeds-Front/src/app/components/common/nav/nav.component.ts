import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class NavComponent implements OnInit {

  isOpened!: boolean;
  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.data.user.email = ''
    this.data.login.email = '';
    this.data.login.password = '';
    this.data.user.firstName = '';
    this.data.user.lastName = '';
    this.data.user.primaryPhoneNumber = '';
  }
}
