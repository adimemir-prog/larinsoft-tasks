import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegistryPageComponent } from './pages/registry-page/registry-page.component';

const routes: Routes = [
  { path: '', component: RegisterPageComponent },
  { path: 'registry-page', component: RegistryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
