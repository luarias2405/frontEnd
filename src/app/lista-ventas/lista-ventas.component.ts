import { Component, OnInit } from '@angular/core';
import { Cliente,} from 'src/models/cliente';

import { ClientesService } from '../services/clientes/clientes.service';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css']
})
export class ListaVentasComponent implements OnInit {

  cliente : Cliente [];

  constructor(private clienteService: ClientesService) { }

  ngOnInit() {

    this.cliente= this.clienteService.getClientes();
  }

}
