import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-erro',
  templateUrl: './control-erro.component.html',
  styleUrls: ['./control-erro.component.scss']
})
export class ControlErroComponent implements OnInit {

  @Input() mostrarErro?: boolean;
  @Input() msgErro?: string;

  constructor() { }

  ngOnInit() {
  }

}
