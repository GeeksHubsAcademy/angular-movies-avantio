import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-saved-movies',
  templateUrl: './saved-movies.component.html',
  styleUrls: ['./saved-movies.component.scss']
})
export class SavedMoviesComponent implements OnInit {
  movies: any[] = [];
  constructor(private storage: StorageService, private api: ApiService) { }

 async ngOnInit() {
    const moviesId = this.storage.getMovies();
    this.movies = await this.api.getMovies(moviesId);
  }

}
