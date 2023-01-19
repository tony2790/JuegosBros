import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { MostrarJuegosComponent } from './mostrar-juegos/mostrar-juegos.component';

const routes: Routes = [{path : "mostrarJuegos", component: MostrarJuegosComponent},
                        {path:  "cuestionario", component:CuestionarioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
