import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() left: boolean;
  @Input() link: string;
  @Input() text: string;
  @Input() slug: string;
  constructor() { }

  ngOnInit() {
  }

  goToLink() {
    window.open(this.link, "_blank");
  }

}
