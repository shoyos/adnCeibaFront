import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicacionComponent } from "./components/publicacion/publicacion.component";

const routes: Routes = [
    {
      path: '',
      component: PublicacionComponent,
      children: []
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductoRoutingModule { }