import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { RouterModule }   	from '@angular/router';

import { AppComponent }  				from './components/app/app.component';
import { TopMenuComponent } 			from './components/top-menu/top-menu.component';
import { MenuService } 					from './services/menu.service';
import { LatestNewsComponent } 			from './components/latest-news/latest-news.component';
import { PressReleasesComponent } 		from './components/press-releases/press-releases.component';
import { AssistanceToFamilyComponent } 	from './components/assistance-to-family/assistance-to-family.component';

@NgModule({
  imports: [ 
  	BrowserModule,
  	RouterModule.forRoot([
  		{
  			path: 'latest-news',
  			component: LatestNewsComponent
  		},
  		{
  			path: 'press-releases',
  			component: PressReleasesComponent
  		},
  		{
  			path: 'assistance-to-family',
  			component: AssistanceToFamilyComponent
  		},
  		{
  			path: '',
  			redirectTo: '/latest-news',
  			pathMatch: 'full'
  		}
  		
  	]) 
  ],
  declarations: [ 
  	AppComponent,
  	TopMenuComponent,
  	LatestNewsComponent,
  	PressReleasesComponent,
  	AssistanceToFamilyComponent
  ],
  providers: [ MenuService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
