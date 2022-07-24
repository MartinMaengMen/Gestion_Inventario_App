import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/_service/articulo.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Articulo } from 'src/app/_model/articulo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario-eliminar',
  templateUrl: './inventario-eliminar.component.html',
  styleUrls: ['./inventario-eliminar.component.css']
})
export class InventarioEliminarComponent implements OnInit {

  form:FormGroup;
  codigo:String;
  constructor(private router : Router, private articuloService : ArticuloService) {
    this.form = new FormGroup( {
      'codigo': new FormControl('', {nonNullable: true}) 
    });
    this.codigo = "";
   }

  ngOnInit(): void {
  }
  onSubmit(): void {

    this.codigo = this.form.value['codigo'];;

    this.articuloService.eliminar(this.codigo).subscribe(response => {
      if(response==true)
      {
        this.router.navigate( [``] );
      }
    });
  }
}
