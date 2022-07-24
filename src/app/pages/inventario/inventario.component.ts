import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Route } from '@angular/router';
import { Articulo } from 'src/app/_model/articulo';
import { ArticuloService } from 'src/app/_service/articulo.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  dataSource:MatTableDataSource<Articulo>
  constructor(private articuloService : ArticuloService) { }

  ngOnInit(){
    this.articuloService.listar().subscribe(data=>{this.dataSource = new MatTableDataSource(data);});
  }
  displayedColumns: string[] = ['Index', 'Codigo', 'Nombre', 'Descripcion', 'Cantidad'];
}
