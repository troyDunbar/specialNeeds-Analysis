import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: [
    './page-three.component.css',
    '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css',
  ],
})
export class PageThreeComponent implements OnInit {
  isCovered!: boolean;
  isFiveYears!: boolean;
  isDisabled!: boolean;
  isBlind!: boolean;
  isCondition!: boolean;

  constructor(public data: DataService) {}

  ngOnInit(): void {}

  radioEventIsCovered(value: boolean) {
    this.isCovered = value;
  }
  radioEventIsFiveYears(value: boolean) {
    this.isFiveYears = value;
  }
  radioEventIsDisabled(value: boolean) {
    this.isDisabled = value;
  }
  radioEventIsBlind(value: boolean) {
    this.isBlind = value;
    this.data.conditionStatus.isLegallyBlind = value;
  }
  radioEventIsCondition(value: boolean) {
    this.isCondition = value;
  }
}
