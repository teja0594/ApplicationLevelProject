import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './access.component';
import { LogComponent } from './components/log/log.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: AccessComponent },
  {path:'login',component:LogComponent},
  {path:'profile',component:ProfileComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
