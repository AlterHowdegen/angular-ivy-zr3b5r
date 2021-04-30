import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxTwitterTimelineModule } from "ngx-twitter-timeline";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { LeaderboardService } from "./leaderboard.service";
import { LeaderboardResolver } from "./leaderboard.resolver";
import { StartpageComponent } from "./startpage/startpage.component";
import { AboutComponent } from "./about/about.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxTwitterTimelineModule,
    RouterModule.forRoot([
      {
        path: "",
        component: StartpageComponent,
        resolve: {
          leaderboard: LeaderboardResolver
        }
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "leaderboard",
        component: LeaderboardComponent,
        resolve: {
          leaderboard: LeaderboardResolver
        }
      }
      //      { path: "products/:productId", component: ProductDetailsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LeaderboardComponent,
    StartpageComponent,
    AboutComponent
  ],
  bootstrap: [AppComponent],
  providers: [LeaderboardService]
})
export class AppModule {}
