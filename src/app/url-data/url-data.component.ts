import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/models/persona';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-url-data',
  templateUrl: './url-data.component.html',
  styleUrls: ['./url-data.component.css'],
  providers:[UrlService],
})
export class UrlDataComponent implements OnInit {

  listaPersona: Persona[]

  constructor(
    private url: UrlService,
  ) { }

  ngOnInit() {

    this.getUrl();
  }


  getUrl(){
    this.url.getApiData().subscribe(
      result => 
    this.listaPersona =result
    )
  }
}
