import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {


 data:any
 isLoggedIn:any
 constructor(private authenication:AuthService,private router:Router) {
   this.authenication.log.subscribe(data=> this.isLoggedIn=data)
   }
 ngOnInit(): void {
   if(!this.isLoggedIn)
      this.router.navigate([''])
 }
  submitData(value:any)
  {
    this.data=value
console.log(value)
  }
}
