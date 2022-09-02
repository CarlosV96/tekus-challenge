import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../services/api/api.service';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface'

import { Router }  from '@angular/router';
import Swal from 'sweetalert2';


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

    try {
      this.api.login(form).subscribe(data => {
        
        const dataResponse:any = data;
        if (dataResponse.Status == "1") {

          localStorage.setItem("token", dataResponse.Token);
          this.router.navigate(['subscribers'])
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Credentials!',
          })
        }
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong Credentials!',
      })
    }

  }

}
