import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultadobusquedaComponent } from './components/resultadobusqueda/resultadobusqueda.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'search/:texto', component: ResultadobusquedaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
