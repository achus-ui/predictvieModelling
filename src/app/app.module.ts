import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './home/home.component';
import { EarlywarningComponent } from './earlywarning/earlywarning.component';
import { BusinessvariablesComponent } from './businessvariables/businessvariables.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppConfigService } from './shared/app-config.service';
import { SolutionService } from './shared/solution.service';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { VariablecollectiveService } from './shared/variablecollective.service';
import { FeatureengineeringComponent } from './featureengineering/featureengineering.component';
import { ModeltechniqueComponent } from './modeltechnique/modeltechnique.component';
import { ModeltechniqueService } from './shared/modeltechnique.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    EarlywarningComponent,
    BusinessvariablesComponent,
    BreadcrumbsComponent,
    FeatureengineeringComponent,
    ModeltechniqueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    AppConfigService,
    SolutionService, 
    VariablecollectiveService,
    ModeltechniqueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
