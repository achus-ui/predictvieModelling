import { Component, OnInit, DoCheck } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent implements OnInit {

  public showHideNav: boolean = true;

  constructor(public location: Location) {
  }

  ngOnInit() {
  }

}
