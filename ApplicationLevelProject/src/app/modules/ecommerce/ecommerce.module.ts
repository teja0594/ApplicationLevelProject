
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpLoaderFactory } from 'src/app/app.module';


@NgModule({
  declarations: [
    EcommerceComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,FormsModule,
    EcommerceRoutingModule,SharedModule, TranslateModule.forChild({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ]
})
export class EcommerceModule { }
