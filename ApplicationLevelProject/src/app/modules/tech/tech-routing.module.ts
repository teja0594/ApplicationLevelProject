import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from 'src/app/shared/guards/authguard.guard';
import { AdvJavaComponent } from './java-components/adv-java/adv-java.component';
import { CoreJavaComponent } from './java-components/core-java/core-java.component';
import { HibernateComponent } from './java-components/hibernate/hibernate.component';
import { JavaAppletsComponent } from './java-components/java-applets/java-applets.component';
import { JavaJacksonComponent } from './java-components/java-jackson/java-jackson.component';
import { JsfComponent } from './java-components/jsf/jsf.component';
import { SpringComponent } from './java-components/spring/spring.component';
import { JavaComponent } from './java/java.component';
import { TechComponent } from './tech.component';
import { ArtificialIntelligenceComponent } from './web-components/artificial-intelligence/artificial-intelligence.component';
import { BlockchainComponent } from './web-components/blockchain/blockchain.component';
import { IotComponent } from './web-components/iot/iot.component';
import { MotionUIComponent } from './web-components/motion-ui/motion-ui.component';
import { ProgressivewebComponent } from './web-components/progressiveweb/progressiveweb.component';
import { ServerlessArchitectureComponent } from './web-components/serverless-architecture/serverless-architecture.component';
import { SinglepageComponent } from './web-components/singlepage/singlepage.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [{ path: '', component: TechComponent },
{path:'java',component:JavaComponent,
children:[
  {path:'jcore',component:CoreJavaComponent},
  {path:'japps',component:JavaAppletsComponent},
  {path:'j2ee',component:AdvJavaComponent},
  {path:'jorm',component:HibernateComponent},
  {path:'jspring',component:SpringComponent},
  {path:'jsf',component:JsfComponent},
  {path:'jjson',component:JavaJacksonComponent},
 ]},
 {path:'web',component:WebComponent,canActivate : [AuthguardGuard],
  children:[
    {path:'wpwa',component:ProgressivewebComponent},
    {path:'waib',component:ArtificialIntelligenceComponent},
    {path:'wsa',component:ServerlessArchitectureComponent},
    {path:'wmui',component:MotionUIComponent},
    {path:'wspa',component:SinglepageComponent},
    {path:'wbct',component:BlockchainComponent},
    {path:'wiot',component:IotComponent},
   ]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechRoutingModule { }
