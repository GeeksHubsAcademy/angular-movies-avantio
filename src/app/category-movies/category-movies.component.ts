import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: "app-category-movies",
  templateUrl: "./category-movies.component.html",
  styleUrls: ["./category-movies.component.scss"]
})
export class CategoryMoviesComponent implements OnInit, OnDestroy {
  movies: any[] = [];
  category: string;
  error: string;
  paramSubscription: { unsubscribe: () =>  void};
constructor(private activatedRoute: ActivatedRoute , private api: ApiService) {}

  ngOnInit(): void {
    this.paramSubscription = this.activatedRoute.paramMap.subscribe(async params => {
      try {
        this.error = null;
        this.category = params.get("category");
        const result: any = await this.api.getCategory(this.category);
        console.log(result);


        this.movies = result.results;
      } catch (error) {
          this.error = error.message;
      }

    });
  }
  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
