import { MatDialog, MatChipInputEvent } from '@angular/material';
import { Component, OnInit, EventEmitter, Inject } from '@angular/core';

@Component({
  selector: 'app-direction-modal',
  templateUrl: './direction-modal.component.html',
  styleUrls: ['./direction-modal.component.css']
})
export class DirectionModalComponent implements OnInit {
  title
  onAdd = new EventEmitter();
  doPost() {
    this.onAdd.emit(this.title);
  }
  constructor() { }
  ngOnInit() {
  }
  fast($event) {
    this.title = $event.toElement.attributes.value.nodeValue;
  }
}
