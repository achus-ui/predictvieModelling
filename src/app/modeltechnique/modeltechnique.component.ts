import { Component, OnInit, DoCheck, TemplateRef } from '@angular/core';
import { ModeltechniqueService } from '../shared/modeltechnique.service';
import { VariablecollectiveService } from '../shared/variablecollective.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AppConfigService } from '../shared/app-config.service';

@Component({
  selector: 'app-modeltechnique',
  templateUrl: './modeltechnique.component.html'
})
export class ModeltechniqueComponent implements OnInit, DoCheck {

  modalRef: BsModalRef;
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
  public oneAtATime: boolean = true;
  public isFirstOpen: boolean = true;
  public descTableModal = [];
  public receivedItemNameForModalDesc: string = '';

  constructor(
    private appConfig: AppConfigService,
    private modelTechniqueService: ModeltechniqueService,
    private variableCollectiveService: VariablecollectiveService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getModelTechniques(this.variableCollectiveService.selectedModelId);
  }

  ngDoCheck() {
    this.getModelTechFirst = this.receivedModelTechniq;
  }

  getModelTechniques(selectedModelRowId) {
    this.modelTechniqueService.getModelTechniques(selectedModelRowId)
      .subscribe(
        (data) => {
          this.modelTechnique = data['mart'];
          this.getModelTechFirst.model_technique_nm = this.modelTechnique[0]['model_technique_nm'];
          this.getModelTechFirst.model_technique_desc = this.modelTechnique[0]['model_technique_desc'];
          this.getModelTechFirst.model_filters_time_dim = this.modelTechnique[0]['model_filters_time_dim'];
          this.getModelTechFirst.model_filters_non_time_dim = this.modelTechnique[0]['model_filters_non_time_dim'];

          this.getModelTechFirst.model_sampling_criteria = this.modelTechnique[0]['model_sampling_criteria'];
          this.getModelTechFirst.model_sampling_stratification_criteria = this.modelTechnique[0]['model_sampling_stratification_criteria'];
          this.getModelTechFirst.model_sampling_replacement_criteria = this.modelTechnique[0]['model_sampling_replacement_criteria'];
          this.getModelTechFirst.model_sampling_training_sample = this.modelTechnique[0]['model_sampling_training_sample'];
          this.getModelTechFirst.model_sampling_testing_sample = this.modelTechnique[0]['model_sampling_testing_sample'];

          this.getModelTechFirst.model_parameters_kfold_valid_parameter = this.modelTechnique[0]['model_parameters_kfold_valid_parameter'];
          this.getModelTechFirst.model_parameters_family = this.modelTechnique[0]['model_parameters_family'];
          this.getModelTechFirst.model_parameters_no_tress = this.modelTechnique[0]['model_parameters_no_tress'];
          this.getModelTechFirst.model_parameters_mtry = this.modelTechnique[0]['model_parameters_mtry'];
          this.getModelTechFirst.model_parameters_node_size = this.modelTechnique[0]['model_parameters_node_size'];

          this.getModelTechFirst.model_output_importance = this.modelTechnique[0]['model_output_importance'];
          this.getModelTechFirst.model_output_fractions = this.modelTechnique[0]['model_output_fractions'];

          this.modelTechBool = true;
        }
      );
  }

  onShowTechDetails(technique) {
    this.receivedModelTechniq = technique;
  }

  openInfoModal(template: TemplateRef<any>, receivedItemName) {
    this.receivedItemNameForModalDesc = receivedItemName;
    this.descTableModal = this.appConfig.descPopUp[receivedItemName];
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
  }

}
