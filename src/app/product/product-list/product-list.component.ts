import { Component, OnInit } from '@angular/core';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../product';
import { Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  faTrash= faTrash;
  faPencil= faPencil;
  products: Product[] = [];
  productSelect!: Product; 
  menssageDelete!: String;
  msgSuccess: boolean = false;
  msgFail: boolean = false;
constructor(private productService: ProductService, private router : Router){
 this.productSelect = new Product();
}


  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(response=>{
      this.products= response;
     });
  }

  preparedDelete(id: number){
    const modalDelete = document.getElementById("modalDelete");
    if(modalDelete!=null){
      modalDelete.style.display = "block";
      this.productService.getProductById(id).subscribe(response=>{
        this.productSelect = response;
      })
    }
  }

  deleteProduct(id: number): void{
    this.productService.deleteProduct(id).subscribe(response=>{
      this.productSelect= response;
      this.productSelect= new Product();
      this.closeModalDelete();
      this.msgSuccess= true;
      this.menssageDelete= "Deletado com sucesso!"
      setTimeout(()=>{
        window.location.reload();
      },2500);
    }, errorResponse=>{
      this.msgFail=true;
        this.menssageDelete="Erro ao deletar cliente!"
    })
  }

  closeModalDelete(){
    const modalDelete = document.getElementById("modalDelete");
    if(modalDelete!=null){
      modalDelete.style.display = "none";
    }
  }
}
