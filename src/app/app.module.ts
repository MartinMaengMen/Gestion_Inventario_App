import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { HttpClientModule } from '@angular/common/http';
import { InventarioInsertarComponent } from './pages/inventario/inventario-insertar/inventario-insertar/inventario-insertar.component';
import { InventarioModificarComponent } from './pages/inventario/inventario-modificar/inventario-modificar/inventario-modificar.component';
import { InventarioEliminarComponent } from './pages/inventario/inventario-eliminar/inventario-eliminar/inventario-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    InventarioInsertarComponent,
    InventarioModificarComponent,
    InventarioEliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
