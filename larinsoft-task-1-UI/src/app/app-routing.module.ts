import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegistryPageComponent } from './pages/registry-page/registry-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: ''            , component: MainPageComponent },
  { path: 'login-page'   , component: LoginPageComponent }, 
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'registry-page', component: RegistryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
