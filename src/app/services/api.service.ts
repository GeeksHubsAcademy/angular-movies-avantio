import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apikey = "cea68b520beecac6718820e4ac576c3a";
  baseUrl = endpoint =>
    `https://api.themoviedb.org/3/${endpoint}?api_key=${this.apikey}&language=en-US`;

  getCategory(category: string) {
    category = category.toLowerCase();
    const validCategories = ["popular", "upcoming", "top_rated"];
    if (validCategories.includes(category)) {
      return this.http.get(this.baseUrl('movie/' + category)).toPromise();
    } else {
      throw new Error("invalid category");
    }
  }
}
