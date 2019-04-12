import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { CardComponent } from './components/card/card.component';

const appRoutes: Routes = [
  {
    path:'',
    component:ProductsComponent
  },
  {
    path:'home',
    component:ProductsComponent
  },
  {
    path:'product',
    component:SinglePageComponent
  },
  {
    path:'cart',
    component: CardComponent 
  },
  // {
  //   path:"**",
  //   redirectTo: '' 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
