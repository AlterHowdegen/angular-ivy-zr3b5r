import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

var leaderboard;

@Component({
  selector: "app-leaderboard",
  templateUrl: "./leaderboard.component.html",
  styleUrls: ["./leaderboard.component.css"]
})
export class LeaderboardComponent implements OnInit {
  leaderboard: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { leaderboard: any }) => {
      console.log(data);
      this.leaderboard = data.leaderboard;
    });
  }
}
