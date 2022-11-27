import { Component } from '@angular/core';

@Component({
  selector: 'app-tevas',
  templateUrl: './tevas.component.html',
  styleUrls: ['./tevas.component.css'],
})
export class TevasComponent {
  rodytiVaikus = true;
  vaikai = ['Petras', 'Ona', 'Leonardokadijus', 'Skaivelina'];

  sleptiVaikus() {
    this.rodytiVaikus = !this.rodytiVaikus;
  }

  keisti() {
    console.log('Pakeista');
  }
}
