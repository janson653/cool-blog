import { Component, OnInit } from '@angular/core';
import {AppService} from "../../app.service";
import {Article} from "../../../models/article";

@Component({
  selector: 'app-archives-component',
  templateUrl: './archives-component.component.html',
  styleUrls: ['./archives-component.component.css'],
  providers: [AppService]
})
export class ArchivesComponentComponent implements OnInit {
  articles: Article[];

  constructor(appService: AppService) {
    this.articles = appService.getMockupArticles();
  }

  ngOnInit() {
  }

}
