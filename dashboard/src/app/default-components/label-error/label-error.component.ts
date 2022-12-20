import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-error',
  templateUrl: './label-error.component.html',
  styleUrls: ['./label-error.component.scss']
})
export class LabelErrorComponent implements OnInit {

  constructor() { }

  @Input() submitted: any;
  @Input() field: any;
  @Input() message: any;

  ngOnInit(): void {
  }

}
