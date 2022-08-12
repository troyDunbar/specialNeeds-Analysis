import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DashboardComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit(): void {
    console.log(this.data.beneficiaryOutput);
  }

}
