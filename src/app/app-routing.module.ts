import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [

  {path:'', component:LayoutComponent, children:[
    {path: 'home', component: HomeComponent},
    {path: 'product-form', component: ProductFormComponent},
    {path: 'product-form/:id', component: ProductFormComponent},
    {path: 'product-list', component: ProductListComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
