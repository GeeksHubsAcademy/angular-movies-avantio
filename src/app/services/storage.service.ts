import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class StorageService {
  movies: any[] ;
  public observableLength = new Subject();
  constructor() {
    this.movies =  JSON.parse(localStorage.getItem("movies")) || [];
    this.observableLength.next(this.movies.length);
  }
  persist() {
    localStorage.setItem("movies", JSON.stringify(this.movies));
  }
  saveMovie(id: string) {
    this.movies = [...new Set([...this.movies, id])];
    this.persist();
    this.observableLength.next(this.movies.length);
  }
  getMovies() {
    return this.movies;
  }
}
