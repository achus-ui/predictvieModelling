import { Component, OnInit } from '@angular/core';
import { ModeltechniqueService } from '../shared/modeltechnique.service';

@Component({
  selector: 'app-modeltechnique',
  templateUrl: './modeltechnique.component.html'
})
export class ModeltechniqueComponent implements OnInit {

  public modelTechnique: any[] = [];
  public modelTechBool: boolean = false;

  constructor(
    private modelTechniqueService: ModeltechniqueService
  ) { }

  ngOnInit() {
    this.getModelTechniques();
  }

  getModelTechniques() {
    this.modelTechniqueService.getModelTechniques()
      .subscribe(
        (data) => {
          this.modelTechnique = data['mart'];
          this.modelTechBool = true;
        }
      );
  }

}
