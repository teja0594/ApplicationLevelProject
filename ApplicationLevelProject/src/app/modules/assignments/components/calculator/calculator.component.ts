import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CalculatorService } from 'src/app/services/calculator.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1:any;
  number2:any
  result:any;
  isLoggedIn:any
  constructor(private service:MainService,private authenication:AuthService,private router:Router) {
    this.authenication.log.subscribe(data=> this.isLoggedIn=data)
    }
  ngOnInit(): void {
    if(!this.isLoggedIn)
       this.router.navigate([''])
  }
  Perform(operator:any,group:any)
  {
    var a =(Number)(this.number1)
    var b =(Number)(this.number2)
   // this.result= (group=='ps') ? ((operator =='+') ? (a+b) : (a-b)) : ((operator =='x') ? (a*b) : (a/b))
    this.result= this.service.CalciOperation(a,b,operator,group)

  }

}
