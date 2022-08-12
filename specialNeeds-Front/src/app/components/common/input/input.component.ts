import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class InputComponent implements OnInit {

  @Input() title!: string;
  @Input() title_id!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() model!: any;
  
  value!: number;
  
  constructor(public data: DataService) {}

  ngOnInit(): void {
  }

}
