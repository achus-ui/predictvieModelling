import { Component, OnInit } from '@angular/core';
import { VariablecollectiveService } from '../shared/variablecollective.service';

@Component({
  selector: 'app-businessvariables',
  templateUrl: './businessvariables.component.html'
})
export class BusinessvariablesComponent implements OnInit {

  public variableCollectiveDetails: any[] = [];
  public variableCollectiveDetailsUnique: any[] = [];
  public variableTableListing: any[] = [];
  public selectedItem: string = '';
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
          this.variableCollectiveDetailsUnique = data['mart'].reduce((unique, o) => {
            if (!unique.some(obj => obj.model_var_category === o.model_var_category)) {
              unique.push(o);
            }
            return unique;
          }, []);
          this.variableCollectiveDetails = data['mart'];
          this.selectedItem = this.variableCollectiveDetailsUnique[0].model_var_category;
          for (let i = 0; i < this.variableCollectiveDetails.length; i++) {
            if (this.variableCollectiveDetails[i].model_var_category === this.variableCollectiveDetailsUnique[0].model_var_category) {
              this.variableTableListing.push(this.variableCollectiveDetails[i])
            }
          }
        }
      );
  }

  drillDownVarCategory(getCategory) {
    this.variableTableListing = [];
    this.selectedItem = getCategory;
    for(let i = 0; i < this.variableCollectiveDetails.length; i++) {
      if (this.variableCollectiveDetails[i].model_var_category === getCategory) {
        this.variableTableListing.push(this.variableCollectiveDetails[i])
      }
    }
  }

  goToCategoryTiles() {
    this.showCategoryTiles = true;
  }

}
