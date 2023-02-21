import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  openedDialog = false;
  constructor() { }

  openDialog(){
    this.openedDialog = !this.openedDialog
  }

}
