import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentsRoutingModule } from './assignments-routing.module';
import { AssignmentsComponent } from './assignments.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { Sibling1Component } from './components/sibling1/sibling1.component';
import { Sibling2Component } from './components/sibling2/sibling2.component';
import { SiblingsComponent } from './components/siblings/siblings.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AssignmentsComponent,CalculatorComponent,ParentComponent,ChildComponent,
    Sibling1Component,Sibling2Component,SiblingsComponent,ProductComponent

  ],
  imports: [
    CommonModule,FormsModule,
    AssignmentsRoutingModule,SharedModule
  ]
})
export class AssignmentsModule { }
