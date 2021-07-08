import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="a-z"
  filter:any="all"
jcourses:any=[];

isLoggedIn:any
constructor(private service:JavaService,private authenication:AuthService,private router:Router) {
  this.authenication.log.subscribe(data=> this.isLoggedIn=data)
  }
ngOnInit(): void {
  if(!this.isLoggedIn)
     this.router.navigate([''])

  this.getJavaCourses();
}
getJavaCourses():any{
  this. service.getAllJavaCourses().subscribe(
    data => {this.jcourses = data
    console.log(data)},
    error => console.log(error));
}
}
