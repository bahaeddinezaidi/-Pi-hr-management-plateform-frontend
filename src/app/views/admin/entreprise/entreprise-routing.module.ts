import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EntrpriseDetailsComponent } from './entreprise/entrprise-details/entrprise-details.component';

const routes: Routes = [
  {path:'', component:EntrepriseComponent},
  {path:':nom', component:EntrpriseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }
