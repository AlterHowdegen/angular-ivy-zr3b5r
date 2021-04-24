import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { LeaderboardService } from "./leaderboard.service";
import { LeaderboardResolver } from "./leaderboard.resolver";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: LeaderboardComponent,
        resolve: {
          leaderboard: LeaderboardResolver
        }
      }
      //      { path: "products/:productId", component: ProductDetailsComponent }
    ])
  ],
  declarations: [AppComponent, HelloComponent, LeaderboardComponent],
  bootstrap: [AppComponent],
  providers: [LeaderboardService]
})
export class AppModule {}
