import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-hibernate',
  templateUrl: './hibernate.component.html',
  styleUrls: ['./hibernate.component.css']
})
export class HibernateComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  cjava:any={}
  corejava:any=[]
  isLoggedIn:any
  constructor(private service:JavaService,private authenication:AuthService,private router:Router) {
    this.authenication.log.subscribe(data=> this.isLoggedIn=data)
    }
  ngOnInit(): void {
    if(!this.isLoggedIn)
       this.router.navigate([''])


    this.service.getAllJavaCourses().subscribe(
      data => data.forEach((val:any) => (val.courseid=='jorm') ? this.cjava = val : console.log(-1)))
      this.service.getHibernate().subscribe(
        data=>this.corejava=data)
  }
}
