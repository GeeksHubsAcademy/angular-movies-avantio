import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: "app-search-movies",
  templateUrl: "./search-movies.component.html",
  styleUrls: ["./search-movies.component.scss"]
})
export class SearchMoviesComponent implements OnInit {
  query = "";
  results: any[] = [];
  constructor(private api: ApiService, private utils: UtilsService) {}
  searchRaw = (query) => {
    console.log(query);

    this.api.searchMovie(query).then(response => {
      this.results = response.results;
    });
  };

  search = this.utils.debounce(this.searchRaw, 300);

  ngOnInit(): void {}
}
