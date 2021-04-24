import { Component, OnInit } from "@angular/core";
import { LeaderboardService } from "../leaderboard.service";

import { highscores } from "../highscores";

var leaderboard;

@Component({
  selector: "app-leaderboard",
  templateUrl: "./leaderboard.component.html",
  styleUrls: ["./leaderboard.component.css"]
})
export class LeaderboardComponent implements OnInit {
  leaderboard = [];

  // url = "https://schildmaid.herokuapp.com/api/highscores?gameMode=1";
  url = "http://localhost:3000/api/highscores?gameMode=1";

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit() {
    this.leaderboardService.getListOfGroup(this.url).subscribe(
      data => {
        console.log(data);
        leaderboard = data.message;
      },
      err => {
        console.log(err);
      }
    );
  }
}
