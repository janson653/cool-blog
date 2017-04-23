import {Component, OnInit} from "@angular/core";
import {Article} from "../../../models/article";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-summary-component',
  templateUrl: './summary-component.component.html',
  styleUrls: ['./summary-component.component.css'],
  providers: [AppService]
})
export class SummaryComponentComponent implements OnInit {

  articles: Article[];

  constructor(private appService: AppService) {
    //this.articles = appService.getMockupArticles();
  }

  ngOnInit() {
    this.appService.getArticles().subscribe(res => {
      console.log(res.json())
      this.articles = res.json();
    })
  }

}
