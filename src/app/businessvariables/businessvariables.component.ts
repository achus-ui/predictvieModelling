import { Component, OnInit } from '@angular/core';
import { VariablecollectiveService } from '../shared/variablecollective.service';

@Component({
  selector: 'app-businessvariables',
  templateUrl: './businessvariables.component.html'
})
export class BusinessvariablesComponent implements OnInit {

  public variableCollectiveDetails: any[] = [];
  public showCategoryTiles: boolean = false;
  public varName = '';
  public varDesc = '';
  public varForm = '';
  public varType = '';
  public varImportance = '';
  public varOutlier = '';
  public varMv = '';

  constructor(
    private varaibleCollectiveService: VariablecollectiveService
  ) { }

  ngOnInit() {
    this.getVariableCollectiveDetails();
  }

  getVariableCollectiveDetails() {
    this.varaibleCollectiveService.getVariableCollectiveDetails()
      .subscribe(
        (data) => {
          this.varaibleCollectiveService = data['mart'];
          this.showCategoryTiles = true;
        }
      );
  }

  drillDownVarCategory(varName, varDesc, varForm, varType, varImportance, varOutlier, varMv) {
    this.varName = varName;
    this.varDesc = varDesc;
    this.varForm = varForm;
    this.varType = varType;
    this.varImportance = varImportance;
    this.varOutlier = varOutlier;
    this.varMv = varMv;
    this.showCategoryTiles = false;
  }

  goToCategoryTiles() {
    this.showCategoryTiles = true;
  }

}
