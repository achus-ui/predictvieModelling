import { Component, OnInit, DoCheck } from '@angular/core';
import { ModeltechniqueService } from '../shared/modeltechnique.service';

@Component({
  selector: 'app-modeltechnique',
  templateUrl: './modeltechnique.component.html'
})
export class ModeltechniqueComponent implements OnInit, DoCheck {

  public modelTechnique: any[] = [];
  public getModelTechFirst= {
    nbmdc_models_row_id: '',
    row_id: '',
    si_id: '',
    model_technique_nm: '',
    model_technique_desc: '',
    model_filters_time_dim: '',
    model_filters_non_time_dim: '',
    model_sampling_criteria: '',
    model_sampling_stratification_criteria: '',
    model_sampling_replacement_criteria: '',
    model_sampling_training_sample: '',
    model_sampling_testing_sample: '',
    model_parameters_kfold_valid_parameter: '',
    model_parameters_family: '',
    model_parameters_no_tress: '',
    model_parameters_mtry: '',
    model_parameters_node_size: '',
    model_output_importance: '',
    model_output_fractions: ''
  };
  public receivedModelTechniq = {
    nbmdc_models_row_id: '',
    row_id: '',
    si_id: '',
    model_technique_nm: '',
    model_technique_desc: '',
    model_filters_time_dim: '',
    model_filters_non_time_dim: '',
    model_sampling_criteria: '',
    model_sampling_stratification_criteria: '',
    model_sampling_replacement_criteria: '',
    model_sampling_training_sample: '',
    model_sampling_testing_sample: '',
    model_parameters_kfold_valid_parameter: '',
    model_parameters_family: '',
    model_parameters_no_tress: '',
    model_parameters_mtry: '',
    model_parameters_node_size: '',
    model_output_importance: '',
    model_output_fractions: ''
  };
  public modelTechBool: boolean = false;

  constructor(
    private modelTechniqueService: ModeltechniqueService
  ) { }

  public oneAtATime: boolean = true;
  public isFirstOpen: boolean = true;

  ngOnInit() {
    this.getModelTechniques();
  }

  ngDoCheck() {
    this.getModelTechFirst = this.receivedModelTechniq;
  }

  getModelTechniques() {
    this.modelTechniqueService.getModelTechniques()
      .subscribe(
        (data) => {
          this.modelTechnique = data['mart'];
          this.getModelTechFirst.model_technique_nm = this.modelTechnique[1]['model_technique_nm'];
          this.getModelTechFirst.model_technique_desc = this.modelTechnique[1]['model_technique_desc'];
          this.getModelTechFirst.model_filters_time_dim = this.modelTechnique[1]['model_filters_time_dim'];
          this.getModelTechFirst.model_filters_non_time_dim = this.modelTechnique[1]['model_filters_non_time_dim'];

          this.getModelTechFirst.model_sampling_criteria = this.modelTechnique[1]['model_sampling_criteria'];
          this.getModelTechFirst.model_sampling_stratification_criteria = this.modelTechnique[1]['model_sampling_stratification_criteria'];
          this.getModelTechFirst.model_sampling_replacement_criteria = this.modelTechnique[1]['model_sampling_replacement_criteria'];
          this.getModelTechFirst.model_sampling_training_sample = this.modelTechnique[1]['model_sampling_training_sample'];
          this.getModelTechFirst.model_sampling_testing_sample = this.modelTechnique[1]['model_sampling_testing_sample'];

          this.getModelTechFirst.model_parameters_kfold_valid_parameter = this.modelTechnique[1]['model_parameters_kfold_valid_parameter'];
          this.getModelTechFirst.model_parameters_family = this.modelTechnique[1]['model_parameters_family'];
          this.getModelTechFirst.model_parameters_no_tress = this.modelTechnique[1]['model_parameters_no_tress'];
          this.getModelTechFirst.model_parameters_mtry = this.modelTechnique[1]['model_parameters_mtry'];
          this.getModelTechFirst.model_parameters_node_size = this.modelTechnique[1]['model_parameters_node_size'];

          this.getModelTechFirst.model_output_importance = this.modelTechnique[1]['model_output_importance'];
          this.getModelTechFirst.model_output_fractions = this.modelTechnique[1]['model_output_fractions'];

          this.modelTechBool = true;
        }
      );
  }

  onShowTechDetails(technique) {
    this.receivedModelTechniq = technique;
  }

}
