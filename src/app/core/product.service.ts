import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';
@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}
  // Replace with actual API call when ready
  getProducts(): Observable<Product[]> {
    return of(mockProducts); // Use mock data for now
  }
  getProduct(id: number): Observable<Product> {
    // Replace with actual API call to fetch product by ID
    return of(mockProducts.find(p => p.id === id)); // Mock logic for now
  }
}