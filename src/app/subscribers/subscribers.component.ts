import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Router }  from '@angular/router';
import { SubscribersI } from '../models/subscribers.interface';


@Component({
  selector: 'subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {

  subscribers: SubscribersI[] = [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getSubscribers('',1,20,'PublicId',0).subscribe(data => {

      this.subscribers = data;

    }) ;
  }

  edit(id:any) {
    this.router.navigate(['editSubscriber', id])
  }

  add(){
    this.router.navigate(['addSubscriber']);
  }

  see(id:any) {
    this.router.navigate(['infoSubscriber', id]);
  }

  delete(id:any) {
    this.api.deleteSubscriber(id).subscribe(data => {
      console.log("data", data);
      this.ngOnInit();
    })
  }

  countries() {
    this.router.navigate(['countries']);
  }

}
