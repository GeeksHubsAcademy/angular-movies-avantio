import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { UtilsService } from './utils.service';
@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient, private utils: UtilsService) {}
  apikey = "cea68b520beecac6718820e4ac576c3a";


  baseUrl = (endpoint, page = 1, query = null) =>
    `https://api.themoviedb.org/3/${endpoint}?api_key=${
      this.apikey
    }&page=${page}${typeof query === 'string' ? "&query=" + query : ""}&language=en-US`;

  getCategoryRaw = (category: string, page: number) => {
    category = category.toLowerCase();
    const validCategories = ["popular", "upcoming", "top_rated", "now_playing"];
    if (validCategories.includes(category)) {
      return this.http.get(this.baseUrl("movie/" + category, page)).toPromise();
    } else {
      throw new Error("invalid category");
    }
  };
  getCategory = this.utils.cache(this.getCategoryRaw);

  private getMovieRaw = (id: string) => {
    return this.http.get(this.baseUrl("movie/" + id)).toPromise();
  };
  private getRelatedRaw = (id: string) => {
    return this.http.get(this.baseUrl("movie/" + id + "/similar")).toPromise();
  };
  getMovies(ids: string[]) {
    return Promise.all(ids.map(id => this.getMovie(id)));
  }
  getMovie = this.utils.cache(this.getMovieRaw);

  getRelated = this.utils.cache(this.getRelatedRaw);

  private searchMovieRaw = query =>
    this.http.get(this.baseUrl("search/movie", 1, query)).toPromise();
  searchMovie = this.utils.cache(this.searchMovieRaw);
}
