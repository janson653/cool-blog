import { Component, OnInit } from '@angular/core';
import {Article} from "../../../models/article";

@Component({
  selector: 'app-rich-text-component',
  templateUrl: './rich-text-component.component.html',
  styleUrls: ['./rich-text-component.component.css']
})
export class RichTextComponentComponent implements OnInit {

  public title = `新建文章`;
  public textData = `## 写下你的文章`;
  public tags = ``;

  constructor() { }

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
  }

}
