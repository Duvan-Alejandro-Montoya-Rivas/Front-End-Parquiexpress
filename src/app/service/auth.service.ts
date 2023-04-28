import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUserDto } from '../model/login-user-dto';
import { JwtTokenDto } from '../model/jwt-token-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8080/auth/login';
  constructor(private httpClient: HttpClient) { }

  public login(dto:LoginUserDto): Observable<JwtTokenDto>{
    return this.httpClient.post<JwtTokenDto>(this.url,dto);

  }
}
