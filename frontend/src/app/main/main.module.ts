import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PresentComponent } from './present/present.component';
import { CardDirective } from './card.directive';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'present', component: PresentComponent },
  { path: '', redirectTo: '/present', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    PresentComponent,
    CardDirective
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
