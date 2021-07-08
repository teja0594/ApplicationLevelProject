import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-siblings',
  templateUrl: './siblings.component.html',
  styleUrls: ['./siblings.component.css']
})
export class SiblingsComponent  {
  isLoggedIn:any
  constructor(private authenication:AuthService,private router:Router) {
    this.authenication.log.subscribe(data=> this.isLoggedIn=data)
    }
  ngOnInit(): void {
    if(!this.isLoggedIn)
       this.router.navigate([''])
  }

}
