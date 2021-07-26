import { Injectable } from '@angular/core';
import { Cliente } from 'src/models/cliente';
import { Producto } from 'src/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Cliente[];
  private productos: Producto[];

  constructor() {
    this.productos=[

      {
        id: 0,
        nombreProducto: 'Producto 1',
        precio: '15000',
        cantidadVenta:0
      },
      {
        id: 1,
        nombreProducto: 'Producto 2',
        precio:'20000',
        cantidadVenta:0
      },
      {
        id: 2,
        nombreProducto: 'Producto 3',
        precio: '25000',
        cantidadVenta:0
      },
      {
        id: 3,
        nombreProducto: 'Producto 4',
        precio: '30000',
        cantidadVenta:0
      },
    ];

    this.clientes=[];
   }

   getProductos(){
     return this.productos;
   }
   getClientes(){
    return this.clientes;
  }

  addCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  newCliente(): Cliente {
    return{
      id:this.clientes.length,
      nombreCliente:'',
      producto:'',
      direccion:'',
      precio:'',
      identificacion: ' ',
    };


  }
}
