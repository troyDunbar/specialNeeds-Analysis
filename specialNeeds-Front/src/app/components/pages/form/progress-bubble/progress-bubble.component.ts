import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress-bubble',
  templateUrl: './progress-bubble.component.html',
  styleUrls: ['./progress-bubble.component.css', '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ProgressBubbleComponent implements OnInit {
  @Input() title !: string;
  @Input() id: any;
  @Input() page !: number;

  @Output() pageChangeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    
  }

  changePage(){
    this.pageChangeEvent.emit(this.id);
  }

}
