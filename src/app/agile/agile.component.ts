import { Component, OnInit } from '@angular/core';
import { InfoService } from '../service/info-service';

@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.css']
})
export class AgileComponent implements OnInit {
  title = "Agile";

  constructor() { }
  

  ngOnInit(): void {
  }

  btnClick() {
    const service = new InfoService();
    service.onClickBtn(this.title);
  }

}
