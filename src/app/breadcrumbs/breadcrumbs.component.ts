import { Component, OnInit, DoCheck } from '@angular/core';
import { SolutionService } from '../shared/solution.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit, DoCheck {
  
  public currentRoute: string = '';
  public getSolutionName: string = '';

  constructor(
    private solutionService: SolutionService,
    private location: Location) { }

  ngOnInit() {
    this.getSolutionName = this.solutionService.solutionDetails.name;
  }

  ngDoCheck() {
    switch (this.location.path()) {
      case '/solution-details':
        this.currentRoute = 'Solution Description'
        break;

      case '/business-variables':
        this.currentRoute = 'Variables'
        break;

      case '/feature-engineering':
        this.currentRoute = 'Feature Engineering'
        break;

      case '/model-technique':
        this.currentRoute = 'Model Technique'
        break;

      default:
        this.currentRoute = ''
        break;
    }
  }


}
