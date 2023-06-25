import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobListComponent} from "./job-list/job-list.component";
import {JobFormComponent} from "./job-form/job-form.component";
import {JobDetailComponent} from "./job-detail/job-detail.component";

const routes: Routes = [
  {path: '', component: JobListComponent},
  {path: 'new', component: JobFormComponent},
  {path: 'new/:id', component: JobFormComponent},
  {path: 'jobs/:id', component: JobDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
