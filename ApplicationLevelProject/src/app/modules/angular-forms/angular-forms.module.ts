import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFormsRoutingModule } from './angular-forms-routing.module';
import { AngularFormsComponent } from './angular-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';


@NgModule({
  declarations: [
    AngularFormsComponent,TemplateDrivenFormsComponent,ModelDrivenFormsComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    AngularFormsRoutingModule, TranslateModule.forChild({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ]
})
export class AngularFormsModule { }
