import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: [
    './page-two.component.css',
    '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css',
  ],
})
export class PageTwoComponent implements OnInit {
  constructor(public data: DataService) {}

  ngOnInit(): void {}
}
