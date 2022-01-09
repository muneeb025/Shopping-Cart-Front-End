import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: String = `${baseUrl}`;

  constructor(private http: HttpClient) { }

  public getProductsList(): Observable <any>{
    return this.http.get(this.url + `/products`)
  }

  public getProductByCate(pCate: String ): Observable <any>{
    return this.http.get(this.url + `products/${pCate}`)
  }
}
