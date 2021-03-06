import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {


  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="a-z"
  filter:any="all"
wtechs:any=[];
isLoggedIn:any
constructor(private service:  WebService,private authenication:AuthService,private router:Router) {
  this.authenication.log.subscribe(data=> this.isLoggedIn=data)
  }
ngOnInit(): void {
  if(!this.isLoggedIn)
     this.router.navigate([''])


  this.getWebTech();
}
getWebTech():any{
  this. service.getAllWebTech().subscribe(
    data => {this.wtechs = data
    console.log(data)},
    error => console.log(error));
}
}
