import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vaikas',
  templateUrl: './vaikas.component.html',
  styleUrls: ['./vaikas.component.css'],
})
export class VaikasComponent {
  @Input() vardas: string = '';
  @Output() paspaudimas: EventEmitter<object> = new EventEmitter();
  log() {
    console.log('Paspaudė');
    this.paspaudimas.emit();
  }
}
