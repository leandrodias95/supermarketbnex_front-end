import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './templayte/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductService } from './service/product.service';
import { LoginComponent } from './login/login.component';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    NavbarComponent,
    ProductFormComponent,
    ProductListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:InterceptorInterceptor, multi: true},
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
