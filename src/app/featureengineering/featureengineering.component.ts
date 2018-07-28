import { Component, OnInit } from '@angular/core';
import { VariablecollectiveService } from '../shared/variablecollective.service';

@Component({
  selector: 'app-featureengineering',
  templateUrl: './featureengineering.component.html'
})
export class FeatureengineeringComponent implements OnInit {

  public variableCollectiveDetails: any[] = [];
  public showCategoryTiles: boolean = false;

  public varName = '';
  public varDesc = '';
  public varForm = '';
  public varImportance = '';
  public varDerivedBase = '';
  public varDerivedRule = '';
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

  drillDownVarCategory(varName, varDesc, varForm, varImportance, varDerivedBase, varDerivedRule, varOutlier, varMv) {
    this.varName = varName;
    this.varDesc = varDesc;
    this.varForm = varForm;
    this.varImportance = varImportance;
    this.varDerivedBase = varDerivedBase;
    this.varDerivedRule = varDerivedRule;
    this.varOutlier = varOutlier;
    this.varMv = varMv;
    this.showCategoryTiles = false;
  }

  goToCategoryTiles() {
    this.showCategoryTiles = true;
  }

}
