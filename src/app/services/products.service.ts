import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../services/products.interface';

const FAKE_STORE_API = 'https://fakestoreapi.com/products';

@Injectable()
export class ProductsService {
  private _http = inject(HttpClient);

  public execute() {
    return this._http.get<Product[]>(FAKE_STORE_API);
  }
}
