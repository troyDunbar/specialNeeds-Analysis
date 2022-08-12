import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class RadioComponent implements OnInit {

  @Input() id!: string;
  @Input() name!: string;
  @Input() value!: boolean;
  @Input() label!: string;

  //for ngModel
  @Input() model!: boolean;
  @Output() radioEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    this.radioEvent.emit(this.model);
  }
}
