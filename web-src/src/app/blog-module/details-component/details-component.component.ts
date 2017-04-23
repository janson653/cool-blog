import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Article} from "../../../models/article";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css'],
  providers: [AppService]
})
export class DetailsComponentComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute, private appService: AppService) {
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

}
