import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged = this.authService.getUserLogged();
  
  usuarioLogueado=false;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usuarioLogueado = this.authService.isLoggedIn("");
    this.authService.changeLoginStatus$.subscribe((loggedStatus: boolean) => {
    this.usuarioLogueado = loggedStatus;
  })
}

  logOut(){
    this.authService.logout();
  }

  }