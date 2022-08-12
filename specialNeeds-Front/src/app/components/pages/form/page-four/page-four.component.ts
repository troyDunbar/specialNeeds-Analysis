import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css', '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class PageFourComponent implements OnInit {
  
  isAble!: boolean;
  isTrust!: boolean;
  
  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  radioEventIsAble(value: boolean){
    this.isAble = value;
  }

  radioEventIsTrust(value: boolean){
    this.isTrust = value;
    this.data.beneficiaryOutput.specialNeedsTrustEligible = value;
  }
}
