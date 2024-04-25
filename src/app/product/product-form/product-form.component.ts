import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product!: Product;
  success: boolean = false;
  errors: [] = [];
  id!: number;
  constructor(private productService: ProductService, private activatedRouter: ActivatedRoute) {
    this.product = new Product();
  }
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(parameter => {
      if (parameter && parameter['id']) {
        this.id = parameter['id'];
        this.productService.getProductById(this.id).subscribe(response => {
          this.product = response;
        }, errorResponse => this.product = new Product())
      }
    })
  }

  submit() {
    if (!this.product.id) {
      this.productService.saveProduct(this.product).subscribe(response => {
        this.success = true;
        this.errors = [];
        setTimeout(() => {
          this.product = new Product();
          this.success = false;
        }, 2500);
      }, errorResponse => {
        console.log('Error response:', errorResponse);
        this.errors = errorResponse.error.errors;
        this.success = false;
      });
    } else {
      this.productService.updateProduct(this.id, this.product).subscribe(response => {
        console.log("Entrou e mostra id :",this.product.id)
        this.success = true;
        this.errors = [];
        setTimeout(() => {
          this.product = new Product();
          this.success = false;
        }, 2500);
      }, errorResponse =>{
        console.log('Error response:', errorResponse);
        this.errors = errorResponse.error.errors;
            this.success= false;
      });

    }

  }

}
