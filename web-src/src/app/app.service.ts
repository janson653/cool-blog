import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Article} from "../models/article";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AppService {

  private serviceHost = 'http://localhost:3000/'

  constructor(private http: Http) {
  }

  public getMockupArticles() {
    let article = new Article();
    article._id = "1111";
    article.author = 'janson';
    article.content = '## 写文章';
    article.create_time = new Date();
    article.update_time = new Date();
    article.title = 'wenzhang1';
    article.tags = 'test';
    return [article, article]
  }

  public getMockupArticleById(id) {
    let article = new Article();
    article._id = "1111";
    article.author = 'janson';
    article.content = '## 写文章 ```' +
      '我自己的测试博客' +
      '```';
    article.create_time = new Date();
    article.update_time = new Date();
    article.title = 'wenzhang1';
    article.tags = 'test';
    return article;
  }

  public getArticles(): Observable<any> {
    return this.http.get(this.serviceHost + "api/article");
  }

  public getArticleById(id: string): Observable<any> {
    return this.http.get(this.serviceHost + "api/article/" + id);
  }

  public updateArticle(article: Article): Observable<any> {
    return this.http.put(this.serviceHost + "api/article/" + article._id, article);
  }

  public saveArticle(article: Article): Observable<any> {
    return this.http.post(this.serviceHost + "api/article", article);
  }

  public deleteArticle(id: string): Observable<any> {
    return this.http.delete(this.serviceHost + "api/article/" + id);
  }

  public getArchives(): Observable<any> {
    return this.http.get(this.serviceHost + "api/article/archives");
  }

}
