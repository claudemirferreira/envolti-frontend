import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sidenavWidth = 4;

  ngStyle: string;

  constructor() {
  }

  ngOnInit() {

  }

  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }
  // sidenavToggle() {
  //   this.ngStyle = 'this.sidenavWidth = 15';
  //   console.log('sidenav width incrases');
  // }

}
