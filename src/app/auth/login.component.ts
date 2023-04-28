import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';
import { ToastrService } from 'ngx-toastr';
import { LoginUserDto } from '../model/login-user-dto';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  username!:string;
  password!:string;
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router:Router

  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onLogin():void {
    const requestBody = { username: "Daniela@gmail.com", password: '1234' }
    const dto = new LoginUserDto (this.username,this.password);
    this.authService.login(dto).subscribe(data => {
      console.log(data.token);
    }, err => {
      this.toastr.error(err.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
    }
    
    )
  }

}
