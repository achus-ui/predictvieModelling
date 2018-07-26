import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EarlywarningComponent } from './earlywarning/earlywarning.component';
import { BusinessvariablesComponent } from './businessvariables/businessvariables.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'early-warning', component: EarlywarningComponent},
    {path: 'business-variables', component: BusinessvariablesComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}