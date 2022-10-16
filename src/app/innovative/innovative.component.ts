import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innovative',
  templateUrl: './innovative.component.html',
  styleUrls: ['./innovative.component.css']
})
export class InnovativeComponent implements OnInit {
  title = "Innovative";
  
  constructor() { }

  ngOnInit(): void {
  }

  btnClick() {
    alert(`Hello from ${this.title}!`)
  }
}
