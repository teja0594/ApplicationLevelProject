import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-progressiveweb',
  templateUrl: './progressiveweb.component.html',
  styleUrls: ['./progressiveweb.component.css']
})
export class ProgressivewebComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  wtech:any={}
  webtech:any=[]
  isLoggedIn:any
  constructor(private service:  WebService,private authenication:AuthService,private router:Router) {
    this.authenication.log.subscribe(data=> this.isLoggedIn=data)
    }
  ngOnInit(): void {
    if(!this.isLoggedIn)
       this.router.navigate([''])


    this.service.getAllWebTech().subscribe(
      data => data.forEach((val:any) => (val.webid=='wpwa') ? this.wtech = val : console.log(-1)))

    this.service.getPWA().subscribe(
      data=>this.webtech=data)
  }
}
