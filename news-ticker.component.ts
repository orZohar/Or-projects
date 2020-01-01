import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news-ticker',
  templateUrl: './news-ticker.component.html',
  styleUrls: ['./news-ticker.component.css']
})
export class NewsTickerComponent implements OnInit {

  newsList = [
    { content: "This is the best news! ", top: 20 },
    { content: "No I'm the best news! ", top: 60 },
    { content: "you are both good news! ", top: 100 },
  ];

  constructor() { }

  ngOnInit() {
    this.move();
  }

  // boolean flag to stop news ticker 
  stopMovingFlag: boolean = false;
  //starting position of required element
  top: number = 20;
  move() {
    // when user is mouse leaving the element, interval keeps running
    this.stopMovingFlag = false;
    var myInterval = setInterval(() => {
      // if user hovering the news, stop them.
      if (this.stopMovingFlag === true) {
        clearInterval(myInterval);
      }
      // iterate over the news list to check their position and check if it needs be to changed again.
      this.newsList.forEach(newsItem => {
        // update position
        newsItem.top--;
        // restart position
        if (newsItem.top < -75) {
          newsItem.top = 150;
        }
      })
    }, 50);
  }

  stop() {
    this.stopMovingFlag = true;
  }
}