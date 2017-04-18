import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

import {AppComponent} from "./app.component";
import { SiteHeaderComponent } from './common-components/site-header/site-header.component';
import { SiteFooterComponent } from './common-components/site-footer/site-footer.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'books', pathMatch: 'full' },
  // { path: 'books', component: BookComponent },
  // { path: 'book-details/:id', component: BookDetailComponent },
  // { path: 'book-create', component: BookCreateComponent },
  // { path: 'book-edit/:id', component: BookEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
