import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() confirmDialog: any;
  @Input() header: any;
  @Input() message: any;

}
