import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 
  }

  saveProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${API_CONFIG.baseUrl}product/insert`, product);
  }

  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_CONFIG.baseUrl}product`);
  }
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.baseUrl}product/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product>{
    return this.http.put<Product>(`${API_CONFIG.baseUrl}product/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.baseUrl}product/${id}`);
  }
}
