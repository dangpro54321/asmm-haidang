import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./Product"
@Injectable()
export class ProductService {
  api = "https://5e7b50320e046300163330bd.mockapi.io/product";
  constructor(
    private http: HttpClient
    )
     { }

 getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }
}