import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VM-Angular-Project';
  isLoggedIn:any
  currentUser:any
language:any='english'


   constructor(private authenication:AuthService,private router:Router,private transSrvc:TranslateService) {
    this.authenication.log.subscribe(data=> this.isLoggedIn=data)
    this.authenication.user.subscribe(data=> this.currentUser=data)
    transSrvc.setDefaultLang('english')
    }

    toProfile()
    {
      this.router.navigate(['/access/profile']);
    }
    toLogIn()
    {
      this.router.navigate(['/access/login']);
    }
    toLogOut()
    {
      this.authenication.setCurrentUserSession(null,false)
      this.router.navigate(['/home']);
      window.location.reload();

    }
    changeLang()
    {
      this.transSrvc.use(this.language)
      console.log(this.language)

    }

}
