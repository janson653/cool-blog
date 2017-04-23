import {Component, OnInit} from '@angular/core';
import {Article} from "../../../models/article";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-rich-text-component',
  templateUrl: './rich-text-component.component.html',
  styleUrls: ['./rich-text-component.component.css'],
  providers: [AppService]
})
export class RichTextComponentComponent implements OnInit {

  public title = `新建文章`;
  public textData = `#### 写下你的文章`;
  public tags = ``;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

  onSave() {
    let article = new Article();
    article.author = 'janson';
    article.content = this.textData;
    article.create_time = new Date();
    article.update_time = new Date();
    article.title = this.title;
    article.tags = this.tags.split(',');
    console.dir(article)
    this.appService.saveArticle(article).subscribe(res => {
      console.log(res)
      if(res.status == 200) {
        alert("article has saved, please go to summary to check")
      }
    })
  }

}
