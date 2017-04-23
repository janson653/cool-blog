import {Component, OnInit} from '@angular/core';
import {Article} from "../../../models/article";
import {AppService} from "../../app.service";
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-rich-text-component',
  templateUrl: './rich-text-component.component.html',
  styleUrls: ['./rich-text-component.component.css'],
  providers: [AppService]
})
export class RichTextComponentComponent implements OnInit {

  public article: Article;
  private isNewArticle = true;

  constructor(private route: ActivatedRoute,private router: Router, private appService: AppService) {
  }

  initArticle() {
    this.article = new Article();
    this.article.title = `新建文章`;
    this.article.content = ``;
    this.article.tags = `test`;
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      console.log('want to open article: ' + p.id)
      //this.article = this.appService.getMockupArticleById(p.id);
      console.log(p.id);
      if (p.id == 'undefined') {
        this.initArticle();
        return;
      }
      this.appService.getArticleById(p.id).subscribe(res => {
        this.article = res.json();
        this.isNewArticle = false;
      })
    })
  }

  onSave() {
    if (this.isNewArticle) {
      this.article.author = 'janson';
      this.article.create_time = new Date();
      this.article.update_time = new Date();
      this.appService.saveArticle(this.article).subscribe(res => {
        console.log(res)
        if (res.status == 200) {
          alert("article has saved, please go to summary to check")
          this.router.navigate(['/'])
        }
      })
    } else {
      this.appService.updateArticle(this.article).subscribe(res => {
        console.log(res)
        if (res.status == 200) {
          alert("article has saved, please go to summary to check")
          this.router.navigate(['/'])
        }
      })
    }


  }

}
