import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { UserAccount } from '../model/UserAccount';

@Injectable({
  providedIn: 'root'
})
export class SigninSignupService {
  
  url: string = `${baseUrl}`;
  userName!: string;
  password!: string;

  constructor(private http: HttpClient) { }

  login(user: UserAccount): Observable<any> {
    return this.http.get(this.url+`/authenticate/${user.userName}/${user.password}`)
  }

  signUp(signUp:UserAccount){
    return this.http.post(this.url+`/create`,signUp);
  }
}
