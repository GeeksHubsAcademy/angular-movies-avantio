
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-display-movie",
  templateUrl: "./display-movie.component.html",
  styleUrls: ["./display-movie.component.scss"]
})
export class DisplayMovieComponent implements OnInit, OnDestroy {
  movie: any;
  id: string;
  error: string;
  paramSubscription: { unsubscribe: () => void };
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.paramSubscription = this.activatedRoute.paramMap.subscribe(
      async params => {
        try {
          this.error = null;
          this.id = params.get("id");
          const result: any = await this.api.getMovie(this.id);
          console.log(result);

          this.movie = result;
        } catch (error) {
          this.error = error.message;
        }
      }
    );
  }
  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
