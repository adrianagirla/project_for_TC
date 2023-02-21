import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, map, Observable } from 'rxjs';
import { DialogService } from '../shared/dialog.service';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  enteredSearchValue: string = '';
  ulrLargeImg!: string;
  users$!: Observable<any>;
  countryControl = new FormControl();
  countries = [
    { id: 1, name: "Denmark" },
    { id: 2, name: "Australia" },
    { id: 3, name: "Canada" },
    { id: 4, name: "Brazil" },
    { id: 5, name: "Netherlands" },
    { id: 6, name: "Spain" },
    { id: 7, name: "Ukraine" },
    { id: 8, name: "Ireland" },
    { id: 9, name: "Mexic" },
    { id: 10, name: "Turkey" },
 ];

 constructor(private userService: UserService,
             public dialogService: DialogService) { }


  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.users$ = this.userService.getAllUsers()
  }

  searchBy(firstName: string, lastName: string): boolean {
    this.enteredSearchValue = this.enteredSearchValue.toLowerCase().trim();
    let firstNameFound = firstName.toLowerCase().includes(this.enteredSearchValue.toLowerCase());
    let lastNameFound = lastName.toLowerCase().includes(this.enteredSearchValue);
    return this.enteredSearchValue === "" || firstNameFound || lastNameFound;
  }

  filterByCountry() {
    this.users$ = this.users$.pipe(
      map(users => users.filter(((us: User) => us.location.country === this.countryControl.value))
      ))
  }

  sortByCountry() {
    this.users$ = this.users$.pipe(
      map(users => users.sort((user1: User, user2: User) => {
        if (user1.location.country < user2.location.country) {
          return -1;
        }
        if (user1.location.country > user2.location.country) {
          return 1;
        }
        return 0;
      })))
  }

  openLargeImg(url: string) {
    this.dialogService.openDialog()
    this.ulrLargeImg = url
  }

}
