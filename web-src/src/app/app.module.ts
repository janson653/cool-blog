import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from "./app.component";
import {SiteHeaderComponent} from "./common-components/site-header/site-header.component";
import {SiteFooterComponent} from "./common-components/site-footer/site-footer.component";
import {BlogModuleModule} from "./blog-module/blog-module.module";
import {AdminModuleModule} from "./admin-module/admin-module.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const appRoutes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'blog', loadChildren: './blog-module/blog-module.module#BlogModuleModule'},// 注意懒加载写法
  {path: 'admin', loadChildren: './admin-module/admin-module.module#AdminModuleModule'},
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
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BlogModuleModule,
    AdminModuleModule,
    NgbModule.forRoot()
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy} //在路由前加#
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
