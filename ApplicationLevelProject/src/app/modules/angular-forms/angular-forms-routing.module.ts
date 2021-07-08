import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormsComponent } from './angular-forms.component';

const routes: Routes = [{ path: '', component: AngularFormsComponent },
{path:'tempforms',component:TemplateDrivenFormsComponent},
{path:'reactiveforms',component:ModelDrivenFormsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularFormsRoutingModule { }
