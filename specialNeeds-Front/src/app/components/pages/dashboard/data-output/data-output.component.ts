import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-output',
  templateUrl: './data-output.component.html',
  styleUrls: ['./data-output.component.css', '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DataOutputComponent implements OnInit {

  constructor(public data: DataService) { }

  n = this.data.outputArray.length - 1;

  ngOnInit(): void {
    
  }

}
