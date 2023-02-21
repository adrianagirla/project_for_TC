import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from '../shared/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() largeImg!: string;
  constructor(private openDialogservice: DialogService) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.openDialogservice.openDialog()
  }

}
