import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './modules/assignments/components/product/product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'products',component:ProductComponent},
  {path:'home',component:HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'ecommerce', loadChildren: () => import('./modules/ecommerce/ecommerce.module').then(fetch => fetch.EcommerceModule) },
  { path: 'tech', loadChildren: () => import('./modules/tech/tech.module').then(fetch => fetch.TechModule) },
  { path: 'access',loadChildren: () => import('./modules/access/access.module').then(fetch => fetch.AccessModule)},
  { path: 'assignments', loadChildren: () => import('./modules/assignments/assignments.module').then(fetch => fetch.AssignmentsModule) },
  { path: 'new', loadChildren: () => import('./modules/new/new.module').then(fetch => fetch.NewModule) },
  { path: 'angularForms', loadChildren: () => import('./modules/angular-forms/angular-forms.module').then(m => m.AngularFormsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
