import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/models/cliente';
import { Producto } from 'src/models/producto';

import { ClientesService } from '../services/clientes/clientes.service';

@Component({
  selector: 'app-registrar-venta',
  templateUrl: './registrar-venta.component.html',
  styleUrls: ['./registrar-venta.component.css']
})
export class RegistrarVentaComponent implements OnInit {

 cliente: Cliente ;
 productos: Producto[];
 public n: number=0;
 valido = false;

    constructor( private clienteService: ClientesService) { }

  ngOnInit() {
    
    this.cliente = this.clienteService.newCliente();
    this.productos = this.clienteService.getProductos();

  }

  getNewCliente():void{
    this.clienteService.addCliente(this.cliente);
    this.cliente=this.clienteService.newCliente();
    this.n += 1;
  }

  validarboton():boolean{
    let invalido=false;
    let valido = true;
    if (!this.cliente.nombreCliente || !this.cliente.direccion || !this.cliente.identificacion||!this.cliente.producto)
    {
         invalido= true
      } 
  
      return invalido
    }
  
}
