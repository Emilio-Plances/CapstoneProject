import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreferredComponent } from './preferred.component';

const routes: Routes = [
  { path: '', component: PreferredComponent, title: 'Preferred | P&D'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferredRoutingModule { }
