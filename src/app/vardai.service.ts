import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VardaiService {
  constructor(private http: HttpClient) {}

  gaukVardus(): Observable<any> {
    return (
      this.http
        //paduodame generic, kad Typescript žinotų, kokio atsakymo tikimės
        .get<{ name: string }[]>('https://vardai.fdp.workers.dev')
        //Naudojame map() observable reikšmei
        .pipe(
          map((zmones) => {
            //Naudojant Array.map() iš žmonių masyvo gauname tik vardų masyvą
            return zmones.map((zmogus) => zmogus.name);
          })
        )
    );
  }
}
