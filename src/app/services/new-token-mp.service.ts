import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewTokenMPService {

  constructor(
    private Http : Http
  ) { }


  setPaymentData(key : string): Observable<any>{
    return this.Http.get("/assets/phpServer/newToken.php?key="+key);
  }
}
