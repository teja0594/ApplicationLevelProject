import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-java-applets',
  templateUrl: './java-applets.component.html',
  styleUrls: ['./java-applets.component.css']
})
export class JavaAppletsComponent implements OnInit {

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
      data => data.forEach((val:any) => (val.courseid=='japps') ? this.cjava = val : console.log(-1)))
      this.service.getJavaApplets().subscribe(
        data=>this.corejava=data)
  }
}
