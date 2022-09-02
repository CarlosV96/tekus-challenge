import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css'],
})
export class AddSubscriberComponent implements OnInit {


  addForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    CountryCode: new FormControl(''),
    CountryName: new FormControl(''),
    PhoneCode: new FormControl(''),
    PhoneNumber: new FormControl(''),
    Area: new FormControl(''),
    JobTitle: new FormControl(''),
    Topics: new FormControl([]),
  });

  subscribers: any = {
    "Subscribers": [],
  };

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  enterForm(form: any) {
    this.subscribers.Subscribers.push(form);
    console.log(this.subscribers);
    this.api.postSubscriber(this.subscribers).subscribe((data) => {
      console.log(data);
      Swal.fire('Added User');

    });
    this.router.navigate(['subscribers']);
  }

  comeBack() {
    this.router.navigate(['subscribers']);
  }

}
