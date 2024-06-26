import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpellDetailsComponent } from './spell-details.component';

const routes: Routes = [
  { path: '', component: SpellDetailsComponent, title:'Spell | P&D'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellDetailsRoutingModule { }
