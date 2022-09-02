import { Injectable } from '@angular/core';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { SubscribersI } from '../../models/subscribers.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://lab.invertebrado.co/api/";

  constructor(private http:HttpClient) { }

  login(form:LoginI):Observable<ResponseI> {
    const link = this.url + "account/login";
    return this.http.post<ResponseI>(link, form);
  }

  getSubscribers(criteria: string, page:number, count: number, sortOrder: string, sortType: number):Observable<SubscribersI[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const link = `${this.url}subscribers/?criteria=${criteria}&page=${page}&count=${count}&sortOrder=${sortOrder}&sortType=${sortType}`;
    return this.http.get<SubscribersI[]>(link, { headers: headers }).pipe(map((data: any) => data.Data ));
  }

  getSingleSubscriber(id:any):Observable<SubscribersI>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const link = `${this.url}subscribers/${id}`;
    return this.http.get<SubscribersI>(link, { headers: headers });
  }

  putSubscriber(id:any, body:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const link = `${this.url}subscribers/${id}`;
    return this.http.put(link, body,  { headers: headers });
  }

  deleteSubscriber(id:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const link = `${this.url}subscribers/${id}`;
    return this.http.delete(link, { headers: headers });
  }

  postSubscriber(form:any):Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const link = `${this.url}subscribers`;
    return this.http.post<any>(link, form, { headers: headers});
  }

  getCountries(criteria: string, page:number, count: number):Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const link = `${this.url}countries/?criteria=${criteria}&page=${page}&count=${count}`;
    return this.http.get<any>(link, { headers: headers }).pipe(map((data: any) => data.Data ));
  }


}
