import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { AddSubscriberComponent } from './add-subscriber/add-subscriber.component';
import { EditSubscriberComponent } from './edit-subscriber/edit-subscriber.component';
import { InfoSubscriberComponent } from './info-subscriber/info-subscriber.component'
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'subscribers',
    component: SubscribersComponent
  },
  {
    path:'addSubscriber',
    component: AddSubscriberComponent
  },
  {
    path:'editSubscriber/:id',
    component: EditSubscriberComponent
  },
  {
    path:'infoSubscriber/:id',
    component: InfoSubscriberComponent
  },
  {
    path:'countries',
    component: CountriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
