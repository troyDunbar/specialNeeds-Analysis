import { AfterViewInit, Component, OnInit } from '@angular/core';
import { addBeneficiaryModel } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: [
    './page-one.component.css',
    '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css',
  ],
})
export class PageOneComponent implements OnInit {
  isWorking!: boolean;
  isTemporary!: boolean;
  isStudent!: boolean;

  states = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ];
  // disability_type = ['', 'Forever Disabled', 'Temporarily Disabled'];

  constructor(public data: DataService) {}

  ngOnInit(): void {
     console.log(this.data.addBeneficiary);
    // debugger
  }

  radioEventIsWorking(value: boolean) {
    this.isWorking = value;
    this.data.addBeneficiary.isEmployed = value;
  }

  radioEventIsTemporary(value: boolean) {
    this.isTemporary = value;
  }

  radioEventIsStudent(value: boolean) {
    this.isStudent = value;
    this.data.addBeneficiary.isStudent = value;
  }
}
