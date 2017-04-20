import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponentComponent } from './summary-component/summary-component.component';
import {RouterModule, Routes} from "@angular/router";
import { ArchivesComponentComponent } from './archives-component/archives-component.component';

const blogRoutes: Routes = [
  { path: '', redirectTo: 'summary', pathMatch: 'full' },
  { path: 'summary', component: SummaryComponentComponent },
  { path: 'archives', component: ArchivesComponentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(blogRoutes)
  ],
  declarations: [SummaryComponentComponent, ArchivesComponentComponent],
  exports: []
})
export class BlogModuleModule {
}
