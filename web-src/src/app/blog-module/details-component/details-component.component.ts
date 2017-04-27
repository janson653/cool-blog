import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../../../models/article";
import {AppService} from "../../app.service";
import {AuthGuard} from "../../auth.guard";

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css'],
  providers: [AppService, AuthGuard]
})
export class DetailsComponentComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private appService: AppService,
              private authGuard: AuthGuard) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      console.log('want to open article: ' + p.id)
      //this.article = this.appService.getMockupArticleById(p.id);
      this.appService.getArticleById(p.id).subscribe(res => {
        this.article = res.json();
      })
    })

  }

  onDeleteArticle() {
    if (this.authGuard.canActivate()==true){
      this.appService.deleteArticle(this.article._id).subscribe(res => {
        if (res.status == 200) {
          alert("delete successfully")
          this.router.navigate(["/"]);
        }
      })
    } else {
      this.router.navigate(["/admin/login"])
    }

  }

}
