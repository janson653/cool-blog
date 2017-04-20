import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Article} from "../models/article";

@Injectable()
export class AppService {

  constructor(http: Http) {
  }

  public getMockupArticles() {
    let article = new Article();
    article.id = "1111";
    article.author = 'janson';
    article.content = '## 写文章';
    article.create_time = new Date();
    article.update_time = new Date();
    article.title = 'wenzhang1';
    article.tags = ['test'];
    return [article, article]
  }

  public getMockupArticleById(id) {
    let article = new Article();
    article.id = "1111";
    article.author = 'janson';
    article.content = '## 写文章 ```' +
      '我自己的测试博客' +
      '```';
    article.create_time = new Date();
    article.update_time = new Date();
    article.title = 'wenzhang1';
    article.tags = ['test'];
    return article;
  }

}
