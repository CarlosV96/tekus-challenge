import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { AddSubscriberComponent } from './add-subscriber/add-subscriber.component';
import { EditSubscriberComponent } from './edit-subscriber/edit-subscriber.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
