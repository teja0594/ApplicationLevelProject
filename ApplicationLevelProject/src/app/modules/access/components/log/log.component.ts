import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  users:any
  displaymsg:any
  hid=false;
  constructor(private authenciate:AuthService,private router:Router) { }

  username:any
  password:any

  ngOnInit(): void {
    this.authenciate.getUsers().subscribe(
      users=> this.users=users)
  }
  setUser()
  {
    for(var user of this.users)
    {
      if(user.username===this.username)
      {
        if(user.password===this.password)
        {
          this.authenciate.setCurrentUserSession(user,true)
          console.log(user)
          this.router.navigate(['/home']);
        }
        else{
          this.hid=true;
          this.displaymsg="Username / Password incorrect"
        }
      }
      else{
        this.hid=true;
        this.displaymsg="User not Found"
      }
    }
   // (val.username==this.user&&val.password==this.password) ? this.user = val : console.log(val)




  }
}
