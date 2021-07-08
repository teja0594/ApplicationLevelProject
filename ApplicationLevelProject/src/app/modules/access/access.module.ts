import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';
import { LogComponent } from './components/log/log.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AccessComponent,
    LogComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,FormsModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
