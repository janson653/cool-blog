import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RichTextComponentComponent} from './rich-text-component/rich-text-component.component';
import {RouterModule, Routes} from "@angular/router";
import {MarkdownModule} from "angular2-markdown";
import {FormsModule} from "@angular/forms";
import {LoginComponentComponent} from './login-component/login-component.component';
import {AuthGuard} from "../auth.guard";
import { FileUploadComponentComponent } from './file-upload-component/file-upload-component.component';
import {ImageUploadModule} from "angular2-image-upload";


const adminRoutes: Routes = [
  {path: '', redirectTo: 'richtext', pathMatch: 'full'},
  {
    path: 'richtext/:id', component: RichTextComponentComponent, canActivate: [AuthGuard]
  },
  {path: 'login', component: LoginComponentComponent},
  {path: 'upload', component: FileUploadComponentComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(adminRoutes),
    MarkdownModule.forRoot(),
    ImageUploadModule.forRoot(),
  ],
  declarations: [RichTextComponentComponent, LoginComponentComponent, FileUploadComponentComponent],
  providers: [AuthGuard]
})
export class AdminModuleModule {
}
