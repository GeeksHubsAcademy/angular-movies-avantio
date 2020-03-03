import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class StorageService {
  movies: any[] = JSON.parse(localStorage.getItem("movies")) || [];
  persist() {
    localStorage.setItem("movies", JSON.stringify(this.movies));
  }
  saveMovie(id: string) {
    this.movies = [...new Set([...this.movies, id])];
    // console.log(this.movies);
    this.persist()
  }
  getMovies() {
    return this.movies;
  }
}
