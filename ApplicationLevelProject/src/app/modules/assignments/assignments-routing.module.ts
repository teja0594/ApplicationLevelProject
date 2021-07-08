import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../../shared/guards/authguard.guard';
import { AssignmentsComponent } from './assignments.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ParentComponent } from './components/parent/parent.component';
import { ProductComponent } from './components/product/product.component';
import { SiblingsComponent } from './components/siblings/siblings.component';

const routes: Routes = [{ path: '', component: AssignmentsComponent },
{path:'calculator',component:CalculatorComponent,canActivate : [AuthguardGuard]},
{path:'parent-child',component:ParentComponent},
{path:'siblings',component:SiblingsComponent},
{path:'products',component:ProductComponent},];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }
