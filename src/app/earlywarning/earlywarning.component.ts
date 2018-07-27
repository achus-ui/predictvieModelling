import { Component, OnInit } from '@angular/core';
import { SolutionService } from '../shared/solution.service';

@Component({
  selector: 'app-earlywarning',
  templateUrl: './earlywarning.component.html'
})
export class EarlywarningComponent implements OnInit {

  public getSolutionDesc: string = '';
  
  constructor(private solutionService: SolutionService) { }

  ngOnInit() {
    this.getSolutionDesc = this.solutionService.solutionDetails.desc;
  }

}
