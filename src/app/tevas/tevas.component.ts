import { Component } from '@angular/core';

@Component({
  selector: 'app-tevas',
  templateUrl: './tevas.component.html',
  styleUrls: ['./tevas.component.css'],
})
export class TevasComponent {
  keisti() {
    console.log('Pakeista');
  }
}
