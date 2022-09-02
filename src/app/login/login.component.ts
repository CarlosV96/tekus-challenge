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

  //errorStatus:boolean = false;
  //errorMsg:string = "";

  ngOnInit(): void {
    this.checkLocal();
  }

  checkLocal() {
    if(localStorage.getItem('token')) {
      this.router.navigate(['subscribers']);
    }
  }

/* ABAJO DE ESTO, INTENTÉ PONER LA INTERFAZ LoginI,
PERO ME ARROJA ERROR EN EL HTML, que no se cumple con los requisitos
*/
  onLogin(form:any) {

    this.api.login(form).subscribe(data => {

      let dataResponse:ResponseI = data;
      if (dataResponse.Status == "1") {
        //console.log("dataresponse",dataResponse);
        localStorage.setItem("token", dataResponse.Token);
        this.router.navigate(['subscribers'])
      } else {

        //this.errorStatus = true;
        //this.errorMsg = dataResponse.Status.error;
      }
    })
  }

}
