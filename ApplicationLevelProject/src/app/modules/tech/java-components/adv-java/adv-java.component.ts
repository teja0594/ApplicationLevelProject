import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-adv-java',
  templateUrl: './adv-java.component.html',
  styleUrls: ['./adv-java.component.css']
})
export class AdvJavaComponent implements OnInit {

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
      data => data.forEach((val:any) => (val.courseid=='j2ee') ? this.cjava = val : console.log(-1)))

    this.service.getAdvJava().subscribe(
      data=>this.corejava=data)
  }
}
