import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../services/api.service";
import { StorageService } from '../services/storage.service';

@Component({
  selector: "app-display-movie",
  templateUrl: "./display-movie.component.html",
  styleUrls: ["./display-movie.component.scss"]
})
export class DisplayMovieComponent implements OnInit, OnDestroy {
  movie: any;
  relatedMovies: any[] = [];
  id: string;
  error: string;
  paramSubscription: { unsubscribe: () => void };
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private storage: StorageService
  ) {}
  async getMovieData() {
    try {
      this.error = null;
      const result: any = await this.api.getMovie(this.id);

      this.movie = result;
    } catch (error) {
      console.log(error.message);

      this.error = error.message || error.error.status_message
    }
  }
  async getRelatedMovies() {
    try {
      const result: any = await this.api.getRelated(this.id);

      this.relatedMovies = result.results;
    } catch (error) {
      console.dir(error);
    }
  }


  saveMovie() {
    this.storage.saveMovie(this.id);
  }

  ngOnInit(): void {
    this.paramSubscription = this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.getMovieData();
      this.getRelatedMovies();
      window.scrollTo({top:0, behavior: 'smooth'});
    });
  }
  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
