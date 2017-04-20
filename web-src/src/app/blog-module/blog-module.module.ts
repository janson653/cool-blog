import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponentComponent } from './summary-component/summary-component.component';
import {RouterModule, Routes} from "@angular/router";
import { ArchivesComponentComponent } from './archives-component/archives-component.component';
import {MarkdownModule} from "angular2-markdown";
import { DetailsComponentComponent } from './details-component/details-component.component';

const blogRoutes: Routes = [
  { path: '', redirectTo: 'summary', pathMatch: 'full' },
  { path: 'summary', component: SummaryComponentComponent },
  { path: 'archives', component: ArchivesComponentComponent },
  { path: 'articles/:id', component: DetailsComponentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(blogRoutes),
    MarkdownModule.forRoot()
  ],
  declarations: [SummaryComponentComponent, ArchivesComponentComponent, DetailsComponentComponent],
  exports: []
})
export class BlogModuleModule {
}
