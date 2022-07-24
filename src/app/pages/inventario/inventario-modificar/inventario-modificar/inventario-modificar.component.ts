import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/app/_service/articulo.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Articulo } from 'src/app/_model/articulo';
@Component({
  selector: 'app-inventario-modificar',
  templateUrl: './inventario-modificar.component.html',
  styleUrls: ['./inventario-modificar.component.css']
})
export class InventarioModificarComponent implements OnInit {
  form:FormGroup;
  articulo:Articulo;

  constructor(private router : Router, private articuloService : ArticuloService) {
    this.form = new FormGroup( {
      'codigo': new FormControl('', {nonNullable: true}),
      'nombre': new FormControl('', {nonNullable: true}),
      'descripcion':new FormControl('', {nonNullable: true}),
      'cantidad':new FormControl('', {nonNullable: true})   
    });
    this.articulo = new Articulo();
   }

  ngOnInit(): void {
  }
  onSubmit(): void {

    this.articulo.codigo = this.form.value['codigo'];
    this.articulo.nombre = this.form.value['nombre'];
    this.articulo.descripcion = this.form.value['descripcion'];
    this.articulo.cantidad = this.form.value['cantidad'];

    this.articuloService.modificar(this.articulo).subscribe(response => {
      if(response==true)
      {
        this.router.navigate( [``] );
      }
    });
  }
}
