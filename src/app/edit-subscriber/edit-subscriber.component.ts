import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SubscribersI } from '../models/subscribers.interface';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'edit-subscriber',
  templateUrl: './edit-subscriber.component.html',
  styleUrls: ['./edit-subscriber.component.css'],
})

export class EditSubscriberComponent implements OnInit {

  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {}

  //dataSubscribe: SubscribersI[] = [];
  editForm = new FormGroup({
    Id: new FormControl(''),
    Name: new FormControl('', Validators.required),
    Email: new FormControl(''),
    CountryCode: new FormControl(''),
    PhoneNumber: new FormControl(''),
    Area: new FormControl(''),
    JobTitle: new FormControl(''),
    Topics: new FormControl(''),
  });

  ngOnInit(): void {
    const idSubscriber = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSingleSubscriber(idSubscriber).subscribe((data) => {
      const dataSubscribers = data;

      this.editForm.setValue({
        Id: dataSubscribers.Id,
        Name: dataSubscribers.Name,
        Email: dataSubscribers.Email,
        CountryCode: dataSubscribers.CountryCode,
        PhoneNumber: dataSubscribers.PhoneNumber,
        Area: dataSubscribers.Area,
        JobTitle: dataSubscribers.JobTitle,
        Topics: dataSubscribers.Topics,
      });
    });
  }

  sendForm(id:any){
    this.api.putSubscriber(id).subscribe(data => {
      console.log(data);
    })
  }

}
