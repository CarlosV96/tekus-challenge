import { Component, OnInit } from '@angular/core';
import { SubscribersI } from '../models/subscribers.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-info-subscriber',
  templateUrl: './info-subscriber.component.html',
  styleUrls: ['./info-subscriber.component.css'],
})
export class InfoSubscriberComponent implements OnInit {
  info: SubscribersI = {
    Name: '',
    Activity: '',
    Area: '',
    ConnectionState: 0,
    CountryCode: '',
    CountryName: '',
    Email: '',
    EndpointsCount: 0,
    Id: undefined,
    JobTitle: '',
    LastActivity: null,
    LastActivityString: null,
    LastActivityUtc: null,
    PhoneCode: '',
    PhoneCodeAndNumber: '',
    PhoneNumber: '',
    PublicId: 0,
    SubscriptionDate: null,
    SubscriptionMethod: 0,
    SubscriptionState: 0,
    SubscriptionStateDescription: '',
    SystemId: null,
    Topics: undefined,
    ValidEmail: false,
  };

  constructor(
    private api: ApiService,
    private router: Router,
    private activerouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSingleSubscriber(id).subscribe((data) => {
      this.info = data;

      //console.log(this.info);
    });
  }

  comeBack() {
    this.router.navigate(['subscribers']);
  }
}
