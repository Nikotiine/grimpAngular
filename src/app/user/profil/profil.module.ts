import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { MeComponent } from './me/me.component';
import { EditComponent } from './edit/edit.component';
import { StatComponent } from './stat/stat.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MeComponent, EditComponent, StatComponent],
  imports: [CommonModule, ProfilRoutingModule, ReactiveFormsModule],
})
export class ProfilModule {}
