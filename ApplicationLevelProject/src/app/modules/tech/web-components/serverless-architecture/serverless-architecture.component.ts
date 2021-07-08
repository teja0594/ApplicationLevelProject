import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-serverless-architecture',
  templateUrl: './serverless-architecture.component.html',
  styleUrls: ['./serverless-architecture.component.css']
})
export class ServerlessArchitectureComponent implements OnInit {

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
      data => data.forEach((val:any) => (val.webid=='wsa') ? this.wtech = val : console.log(-1)))

    this.service.getServerlessArchitecture().subscribe(
      data=>this.webtech=data)
  }
}
