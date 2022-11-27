import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VardaiService {
  private vaikai = ['Petras', 'Ona', 'Leonardokadijus', 'Skaivelina'];

  gaukVardus() {
    return this.vaikai;
  }
}
