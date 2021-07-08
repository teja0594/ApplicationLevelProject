import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { FormaterPipe } from './pipes/formater.pipe';
import { NgColorDirective } from './directives/ng-color.directive';
import { Ngcolor1Directive } from './directives/ngcolor1.directive';
import { Ngcolor2Directive } from './directives/ngcolor2.directive';
import { Ngcolor3Directive } from './directives/ngcolor3.directive';



@NgModule({
  declarations: [
    SearchPipe,SortPipe,ReversePipe,FormaterPipe,
    NgColorDirective,Ngcolor1Directive,Ngcolor2Directive,Ngcolor3Directive
  ],
  imports: [
    CommonModule,],
    exports:[SearchPipe,SortPipe,ReversePipe,FormaterPipe,
      NgColorDirective,Ngcolor1Directive,Ngcolor2Directive,Ngcolor3Directive,]
})
export class SharedModule { }
