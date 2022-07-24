import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from 'src/app/_model/articulo';
import { HOST } from 'src/app/_shared/var.constants';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  url: string = `${HOST}/api/articulo`;
  articuloCambio = new Subject< Articulo[] >();
  constructor( private http: HttpClient ) { }

  listar() {
    return this.http.get<Articulo[]>(this.url);
  }
  registrar( articulo: Articulo ) {
    return this.http.post(this.url, articulo);
  }
  modificar( articulo: Articulo ) {
    return this.http.put( this.url, articulo );
  }
  eliminar( codigo: String ) {
    return this.http.delete( `${this.url}/${codigo}` );
  }
}
