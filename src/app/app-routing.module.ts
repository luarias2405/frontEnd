import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarVentaComponent } from './registrar-venta/registrar-venta.component';
import { UrlDataComponent } from './url-data/url-data.component';

const routes: Routes = [
{path:'', component:RegistrarVentaComponent},
{path:'api', component:UrlDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})





export class AppRoutingModule { 


}
