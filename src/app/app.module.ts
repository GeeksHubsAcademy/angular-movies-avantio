import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DisplayMovieComponent } from './display-movie/display-movie.component';
import { CategoryMoviesComponent } from './category-movies/category-movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DisplayMovieComponent,
    CategoryMoviesComponent,
    NotFoundComponent,
    DisplayMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
