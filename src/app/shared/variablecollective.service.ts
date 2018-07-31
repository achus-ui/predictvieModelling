import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VariablecollectiveService {

  constructor(
    private urlConfig: AppConfigService,
    private httpClient: HttpClient
  ) { }

  getVariableCollectiveDetails() {
    return this.httpClient.get(this.urlConfig.constants.baseUrl + 'getinfo?of=50&i=0&type=mart&id=' + this.urlConfig.constants.martId +'&t='+ this.urlConfig.constants.token +'&tablename=nbmdc_model_variables');
  }


}
