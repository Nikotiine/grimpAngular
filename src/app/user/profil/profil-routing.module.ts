import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeComponent } from './me/me.component';
import { EditComponent } from './edit/edit.component';
import { StatComponent } from './stat/stat.component';
import { UHomeComponent } from '../u-home/u-home.component';

const routes: Routes = [
  { path: ':id', component: MeComponent, pathMatch: 'full' },
  { path: 'edit/:id', component: EditComponent, pathMatch: 'full' },
  { path: 'stat/:id', component: StatComponent, pathMatch: 'full' },
  { path: '**', component: UHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilRoutingModule {}