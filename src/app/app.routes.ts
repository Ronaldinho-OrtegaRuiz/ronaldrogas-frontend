import {RouterModule, Routes} from '@angular/router';
import {CategoryPageComponent} from "./pages/category/category.page.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: '', redirectTo: '/backoffice/categorias', pathMatch: 'full' },
  { path: 'backoffice/categorias', component: CategoryPageComponent },
  // otras rutas aquí
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
