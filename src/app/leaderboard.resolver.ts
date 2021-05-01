import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { catchError, map } from "rxjs/operators";
import { EMPTY } from "rxjs";
import { LeaderboardService } from "./leaderboard.service";

@Injectable({
  providedIn: "root"
})
export class LeaderboardResolver implements Resolve<any> {
  url = "https://schildmaid.herokuapp.com/api/highscores?gameMode=1";

  //url = "http://localhost:3000/api/highscores?gameMode=1";

  constructor(private service: LeaderboardService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.getListOfGroup(this.url).pipe(
      catchError(error => {
        return EMPTY;
      })
    );
  }
}
