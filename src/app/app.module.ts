import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HomeComponent} from './home/home.component';
import {MailboxComponent} from './mailbox/mailbox.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SharedComponent } from './shared/shared.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mailbox',
    component: MailboxComponent
  }
];

@NgModule({

  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    MailboxComponent,
    SharedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
