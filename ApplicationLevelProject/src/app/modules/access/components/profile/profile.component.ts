import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoggedIn:any
  currentUser:any
   constructor(private authenication:AuthService,private router:Router) {

    }

  ngOnInit(): void {
    this.authenication.log.subscribe(data=> this.isLoggedIn=data)
    this.authenication.user.subscribe(data=> this.currentUser=data)
    if(!this.isLoggedIn)
    this.router.navigate([''])


  }

}
