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

  constructor(private appService: AppService) {
    // this.articles = appService.getMockupArticles();
  }

  ngOnInit() {
    this.appService.getArchives().subscribe(res => {
      this.articles = res.json();
    })
  }

}
