import { Injectable } from '@angular/core';
import{ HttpHeaders, HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs'
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersURL = 'https://randomuser.me/api/?results=250&nat=au,ca,br,dk,tr,ie,mx,nl,ua,es';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(
    private http: HttpClient) { }

    getAllUsers(): Observable<any>{
      return this.http.get<any>(this.usersURL).pipe(
        map(response=>response.results)
      );};
      
    }

