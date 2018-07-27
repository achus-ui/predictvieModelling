import { Component, OnInit } from '@angular/core';
import { SolutionService } from '../shared/solution.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit {

  public getSolutionName: string = '';

  constructor(private solutionService: SolutionService) { }

  ngOnInit() {
    this.getSolutionName = this.solutionService.solutionDetails.name;
  }

}
