import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextComponentComponent } from './rich-text-component/rich-text-component.component';
import {RouterModule, Routes} from "@angular/router";
import {MarkdownModule} from "angular2-markdown";
import {FormsModule} from "@angular/forms";


const adminRoutes: Routes = [
  { path: '', redirectTo: 'richtext', pathMatch: 'full' },
  { path: 'richtext/:id', component: RichTextComponentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(adminRoutes),
    MarkdownModule.forRoot()
  ],
  declarations: [RichTextComponentComponent]
})
export class AdminModuleModule { }
