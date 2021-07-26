import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarVentaComponent } from './registrar-venta/registrar-venta.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ListaVentasComponent } from './lista-ventas/lista-ventas.component';
import { ClientesService } from './services/clientes/clientes.service';
import { UrlDataComponent } from './url-data/url-data.component';
import { UrlService } from './services/url.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistrarVentaComponent,
    ListaVentasComponent,
    UrlDataComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [ClientesService, UrlService],
  bootstrap: [AppComponent],
  exports:[RegistrarVentaComponent,ListaVentasComponent,UrlDataComponent]
})
export class AppModule {  }
