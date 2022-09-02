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
  // .. . . .: any[];
  subscribers: SubscribersI[] = [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getSubscribers('',1,10,'PublicId',0).subscribe(data => {
      //console.log("DATA",data[0].Name);
      this.subscribers = data;
      //console.log(this.subscribers.Data[0]);
    }) ;
  }

  edit(id:any) {
    //console.log(id);
    this.router.navigate(['editSubscriber', id])
  }

  add(){
    this.router.navigate(['addSubscriber']);
  }

}
