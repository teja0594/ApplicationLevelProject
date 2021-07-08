import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechRoutingModule } from './tech-routing.module';
import { TechComponent } from './tech.component';
import { JavaComponent } from './java/java.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { AdvJavaComponent } from './java-components/adv-java/adv-java.component';
import { CoreJavaComponent } from './java-components/core-java/core-java.component';
import { SpringComponent } from './java-components/spring/spring.component';
import { HibernateComponent } from './java-components/hibernate/hibernate.component';
import { JsfComponent } from './java-components/jsf/jsf.component';
import { JavaJacksonComponent } from './java-components/java-jackson/java-jackson.component';
import { JavaAppletsComponent } from './java-components/java-applets/java-applets.component';
import { WebComponent } from './web/web.component';
import { BlockchainComponent } from './web-components/blockchain/blockchain.component';
import { ArtificialIntelligenceComponent } from './web-components/artificial-intelligence/artificial-intelligence.component';
import { MotionUIComponent } from './web-components/motion-ui/motion-ui.component';
import { ProgressivewebComponent } from './web-components/progressiveweb/progressiveweb.component';
import { SinglepageComponent } from './web-components/singlepage/singlepage.component';
import { IotComponent } from './web-components/iot/iot.component';
import { ServerlessArchitectureComponent } from './web-components/serverless-architecture/serverless-architecture.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppModule, HttpLoaderFactory } from 'src/app/app.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


@NgModule({
  declarations: [
    TechComponent,WebComponent,BlockchainComponent,ArtificialIntelligenceComponent,MotionUIComponent,ProgressivewebComponent,SinglepageComponent,IotComponent,ServerlessArchitectureComponent,
    JavaComponent,AdvJavaComponent,CoreJavaComponent,SpringComponent,HibernateComponent,JsfComponent,JavaJacksonComponent,JavaAppletsComponent,

  ],
  imports: [
    CommonModule,FormsModule,HttpClientModule,
    TechRoutingModule,MaterialModule,SharedModule, TranslateModule.forChild({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ]
})
export class TechModule { }
