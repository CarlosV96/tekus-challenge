import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './login/login.component';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  /*{
    path:'',
    component:LoginComponent
  },
  {
    path:'/subscribers',
    component: SubscribersComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
