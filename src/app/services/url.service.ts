import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Persona } from 'src/models/persona';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

 urlBack:string= environment.url ;
  constructor(
 private httpClient: HttpClient,
 ) { }


  getApiData():Observable<Persona[]>{
     return this.httpClient.get<Persona[]>(this.urlBack.concat('HttpTrigger1'),{
        params:{
          code:'2VIMaFxshtJd/TZ1friwut3p5uZttOwA3EIuXsvmHaHzJ2HPal5jhQ=='
        }
      })
    
  }
}
