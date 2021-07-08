import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-artificial-intelligence',
  templateUrl: './artificial-intelligence.component.html',
  styleUrls: ['./artificial-intelligence.component.css']
})
export class ArtificialIntelligenceComponent implements OnInit {

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
      data => data.forEach((val:any) => (val.webid=='waib') ? this.wtech = val : console.log(-1)))

    this.service.getAI().subscribe(
      data=>this.webtech=data)
  }
}
