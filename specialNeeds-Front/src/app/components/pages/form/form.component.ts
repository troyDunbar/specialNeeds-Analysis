
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { APIService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class FormComponent implements OnInit {

  page = 1;
  titles = ["User Information", "Household Expenses", "Government Aid Programs Eligibility", "Savings/Investment Options"];
  sheets = ["page-one-display", "page-two-display"];


  constructor(public data: DataService, private api: APIService) { }

  ngOnInit(): void {
  }

  nextPage(){
    if(this.page > 3) return;
    this.page++;
  }

  prevPage(){
    if(this.page < 2) return;
    this.page--;
  }

  receivePageChange($event: any){
    this.page = $event;
  }

  submitForm(){
    this.api.addBeneficiary(this.data.addClientBeneficiary);
  }
}
