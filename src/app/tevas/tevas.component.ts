import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VardaiService } from '../vardai.service';

@Component({
  selector: 'app-tevas',
  templateUrl: './tevas.component.html',
  styleUrls: ['./tevas.component.css'],
})
export class TevasComponent {
  rodytiVaikus = true;
  vaikai: Observable<any>; // Pakeitėme iš string[]
  constructor(private vardaiService: VardaiService) {
    this.vaikai = this.vardaiService.gaukVardus();
  }

  sleptiVaikus() {
    this.rodytiVaikus = !this.rodytiVaikus;
  }

  keisti() {
    console.log('Pakeista');
  }
}
