import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-category-movies",
  templateUrl: "./category-movies.component.html",
  styleUrls: ["./category-movies.component.scss"]
})
export class CategoryMoviesComponent implements OnInit, OnDestroy {
  movies: any[] = [];
  category: string;
  paramSubscription: { unsubscribe: () =>  void};

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramSubscription = this.activatedRoute.paramMap.subscribe(params => {
      this.category = params.get("category");
    });
  }
  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
