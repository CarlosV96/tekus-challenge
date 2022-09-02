import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {

  constructor() { }

  addForm = new FormGroup({
    addName: new FormControl('', [Validators.required]),
    addEmail: new FormControl('', [Validators.required]),
    addCodeCountry: new FormControl(''),
    addPhone: new FormControl('')
  })

  ngOnInit(): void {
  }

}
