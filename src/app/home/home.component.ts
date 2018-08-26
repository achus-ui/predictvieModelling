import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SolutionService } from '../shared/solution.service';
import { VariablecollectiveService } from '../shared/variablecollective.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public solutionList: any[] = [];

  constructor(
    private router: Router,
    private solutionService: SolutionService,
    private variableCollectiveService: VariablecollectiveService) { }

  ngOnInit() {
    this.getSolutionList();
  }

  getSolutionList() {
    this.solutionService.getSolutionList()
      .subscribe(
        (data) => {
          this.solutionList = data['mart'];
        }
      );
  }

  goToSolutionDetails(solutionName, solutionDesc, solutionRowId) {
    this.variableCollectiveService.selectedModelId = solutionRowId;
    this.solutionService.solutionDetails.name = solutionName;
    this.solutionService.solutionDetails.desc = solutionDesc;
    this.router.navigate(['/solution-details']);
  }

}
