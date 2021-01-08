import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicacionComponent } from '@publicaciones/components/publicacion/publicacion.component';

const routes: Routes = [
  { path: 'publicaciones', loadChildren: () => import('@publicaciones/publicaciones.module').then(mod => mod.PublicacionesModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
