import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EarlywarningComponent } from './earlywarning/earlywarning.component';
import { BusinessvariablesComponent } from './businessvariables/businessvariables.component';
import { FeatureengineeringComponent } from './featureengineering/featureengineering.component';
import { ModeltechniqueComponent } from './modeltechnique/modeltechnique.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'solution-details', component: EarlywarningComponent},
    {path: 'business-variables', component: BusinessvariablesComponent},
    {path: 'feature-engineering', component: FeatureengineeringComponent},
    {path: 'model-technique', component: ModeltechniqueComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}