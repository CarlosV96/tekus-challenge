import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { AddSubscriberComponent } from './add-subscriber/add-subscriber.component';
import { EditSubscriberComponent } from './edit-subscriber/edit-subscriber.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfoSubscriberComponent } from './info-subscriber/info-subscriber.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { CountriesComponent } from './countries/countries.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscribersComponent,
    AddSubscriberComponent,
    EditSubscriberComponent,
    InfoSubscriberComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
