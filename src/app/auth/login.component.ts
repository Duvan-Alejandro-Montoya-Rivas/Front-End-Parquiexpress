// Imports the default component type
import { Component } from '@angular/core';

//Imports the httpClient to perform request
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  // Variables to set the captured values
  username: string | undefined;
  password: string | undefined;

  constructor(private http: HttpClient) { }

  login() {

    // Change the URL with the right endpoint
    const url = 'https://example.com/login';
    const data = { username: this.username, password: this.password };

    this.http.post(url, data).subscribe(response => {

      //Here, the response object contains the object returned by the request
      console.log(response);

    });
  }
}
