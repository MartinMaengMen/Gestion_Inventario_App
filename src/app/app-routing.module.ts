import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioEliminarComponent } from './pages/inventario/inventario-eliminar/inventario-eliminar/inventario-eliminar.component';
import { InventarioInsertarComponent } from './pages/inventario/inventario-insertar/inventario-insertar/inventario-insertar.component';
import { InventarioModificarComponent } from './pages/inventario/inventario-modificar/inventario-modificar/inventario-modificar.component';
import { InventarioComponent } from './pages/inventario/inventario.component';

const routes: Routes = [
  {path:'',component:InventarioComponent},
  {path:'inventario/insertar',component:InventarioInsertarComponent},
  {path:'inventario/modificar',component:InventarioModificarComponent},
  {path:'inventario/eliminar',component:InventarioEliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
