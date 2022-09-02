import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {ApiService} from '../services/api/api.service'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: any[] = [];

  constructor(private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    this.api.getCountries('',1,10).subscribe(data => {
      this.countries = data;
    })
  }

  comeBack() {
    this.router.navigate(['subscribers']);
  }

}
