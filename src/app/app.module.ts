import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { AddSubscriberComponent } from './add-subscriber/add-subscriber.component';
import { EditSubscriberComponent } from './edit-subscriber/edit-subscriber.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscribersComponent,
    AddSubscriberComponent,
    EditSubscriberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
