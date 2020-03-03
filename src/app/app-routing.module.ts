import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayMovieComponent } from './display-movie/display-movie.component';
import { CategoryMoviesComponent } from './category-movies/category-movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SavedMoviesComponent } from './saved-movies/saved-movies.component';


const routes: Routes = [
  { path: "", redirectTo: "/movies/popular", pathMatch: "full" },
  { path: "movies/:category", component: CategoryMoviesComponent },
  { path: "movie/:id", component: DisplayMovieComponent },
  { path: "saved", component: SavedMoviesComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
