import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../services/api/api.service';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface'

import { Router }  from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm = new FormGroup({
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  });

  constructor( private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    //this.checkLocal();
  }

  checkLocal() {
    if(localStorage.getItem('token')) {
      this.router.navigate(['subscribers']);
    }
  }

  onLogin(form:any) {

    this.api.login(form).subscribe(data => {

      let dataResponse:ResponseI = data;
      if (dataResponse.Status == "1") {
        //console.log("dataresponse",dataResponse);
        localStorage.setItem("token", dataResponse.Token);
        this.router.navigate(['subscribers'])
      }
    })
  }

}
