import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import {CreateComponent} from "./components/create/create.component";
import {EditComponent} from "./components/edit/edit.component";
import { ShowComponent } from './components/show/show.component';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [
  {
    path: 'panelDeControl',loadChildren: () => import('./pages/panel-de-control/panel-de-control.module').then(m => m.PanelDeControlModule)
  },
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
