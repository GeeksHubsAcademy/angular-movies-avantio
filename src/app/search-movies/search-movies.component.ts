import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {
  query  = '';
  results: any[] = [];
  search = () => {
    console.log(this.query);

    this.api.searchMovie(this.query).then(response => {
        this.results = response.results;
    })
  }
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

}
