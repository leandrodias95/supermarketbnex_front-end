import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:LayoutComponent, children:[
      {path: 'home', component: HomeComponent, canActivate:[authGuard]},
      {path: 'product-form', component: ProductFormComponent, canActivate:[authGuard]},
      {path: 'product-form/:id', component: ProductFormComponent, canActivate:[authGuard]},
      {path: 'product-list', component: ProductListComponent, canActivate:[authGuard]},
      {path:'', redirectTo:'/login', pathMatch:'full'} 
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
