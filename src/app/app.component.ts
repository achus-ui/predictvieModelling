import { Component, OnInit } from '@angular/core';
import { SolutionService } from './shared/solution.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private solutionServie: SolutionService) {}

  ngOnInit() {
    // if(this.solutionServie.solutionDetails.name === '') {
    //   this.router.navigate(['']);
    // }
  }
  
}
