import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  public solutionDetails = {
    'name': '',
    'desc': ''
  };

  constructor(
    private urlConfig: AppConfigService,
    private httpClient: HttpClient) { }

  getSolutionList() {
    return this.httpClient.get(this.urlConfig.constants.baseUrl + 'getinfo?of=10&i=0&type=mart&id='+ this.urlConfig.constants.martId +'&t='+ this.urlConfig.constants.token +'&tablename=nbmdc_models');
  }

}
