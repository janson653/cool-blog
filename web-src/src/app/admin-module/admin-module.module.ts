import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextComponentComponent } from './rich-text-component/rich-text-component.component';
import {RouterModule, Routes} from "@angular/router";


const adminRoutes: Routes = [
  { path: '', redirectTo: 'richtext', pathMatch: 'full' },
  { path: 'richtext', component: RichTextComponentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [RichTextComponentComponent]
})
export class AdminModuleModule { }
