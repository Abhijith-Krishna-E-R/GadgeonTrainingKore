import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplify',
  templateUrl: './simplify.component.html',
  styleUrls: ['./simplify.component.css']
})
export class SimplifyComponent implements OnInit {
  title = "Simplify";

  constructor() { }

  ngOnInit(): void {
  }

  btnClick() {
    alert(`Hello from ${this.title}!`)
  }
}
