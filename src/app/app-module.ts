import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MovieList } from './feature/movie/movie-list/movie-list';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MovieDetail } from './feature/movie/movie-detail/movie-detail';
import { MovieCreate } from './feature/movie/movie-create/movie-create';
import { MovieEdit } from './feature/movie/movie-edit/movie-edit';
import { NotFound } from './core/not-found/not-found';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    MovieList,
    MovieDetail,
    MovieCreate,
    MovieEdit,
    NotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
