import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PresentComponent } from './present/present.component';
import { CardDirective } from './card.directive';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'present', component: PresentComponent },
  { path: 'projects/:id', component: ProjectsComponent },
  { path: '', redirectTo: '/present', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    PresentComponent,
    CardDirective,
    ProjectsComponent
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
