import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  PocketMoney:any
  money:any=0
   transactions:any=[]
   isLoggedIn:any
   constructor(private authenication:AuthService,private router:Router) {
     this.authenication.log.subscribe(data=> this.isLoggedIn=data)
     }
   ngOnInit(): void {
     if(!this.isLoggedIn)
        this.router.navigate([''])
   }
getTransactions(data:any):any
{
  this.transactions.unshift(data);
}
send()
{
  this.money=this.PocketMoney
}
refresh(): void {
  window.location.reload();
}
}
