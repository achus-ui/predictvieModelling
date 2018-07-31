import { Component, OnInit } from '@angular/core';
import { VariablecollectiveService } from '../shared/variablecollective.service';

@Component({
  selector: 'app-featureengineering',
  templateUrl: './featureengineering.component.html'
})
export class FeatureengineeringComponent implements OnInit {

  public variableCollectiveDetails: any[] = [];
  public variableCollectiveDetailsUnique: any[] = [];
  public variableTableListing: any[] = [];
  public selectedItem: string = '';
  public showOnlyDerived: any[] = [];
  public showCategoryTiles: boolean = false;

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
            if (!unique.some(obj => obj.model_var_state === o.model_var_state)) {
              unique.push(o);
            }
            return unique;
          }, []);
          this.variableCollectiveDetails = data['mart'];
          this.selectedItem = this.variableCollectiveDetailsUnique[0].model_var_category;
          for (let i = 0; i < this.variableCollectiveDetailsUnique.length; i++) {
            if (this.variableCollectiveDetailsUnique[i].model_var_category === this.variableCollectiveDetailsUnique[0].model_var_category) {
              this.variableTableListing.push(this.variableCollectiveDetails[i])
            }
          }
        }
      );
  }

  drillDownVarCategory(getCategory) {
    this.variableTableListing = [];
    this.selectedItem = getCategory;
    for (let i = 0; i < this.variableCollectiveDetailsUnique.length; i++) {
      if (this.variableCollectiveDetailsUnique[i].model_var_category === getCategory) {
        this.variableTableListing.push(this.variableCollectiveDetails[i])
      }
    }
  }

}
