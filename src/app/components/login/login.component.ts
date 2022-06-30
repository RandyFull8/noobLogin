import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    password: '',
  }

  constructor(private authService: AuthService, private router: Router) { }
    
    routeRedirect='';

  ngOnInit() {}
  Ingresar() {
    try {
      const { email, password } = this.usuario;
      this.authService.login(email, password).then(user => {
        if(!user) {
          alert("Datos incorrectos, si no tenes cuenta registrate!");
          return;
        };  
        if(user){
          alert("Bienvenido "+email);
          this.router.navigate(['/panelDeControl'])
          return;
        };
      });
      //
      this.routeRedirect=this.authService.urlUsuariointentaacceder;
      this.authService.urlUsuariointentaacceder;
      this.router.navigate([this.routeRedirect]);
      //
    } catch (err) {
        console.log(err)
      }
    }



  logout() {

    this.authService.logout();
  }

}
