import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieList } from './feature/movie/movie-list/movie-list';
import { MovieCreate } from './feature/movie/movie-create/movie-create';
import { MovieDetail } from './feature/movie/movie-detail/movie-detail';
import { MovieEdit } from './feature/movie/movie-edit/movie-edit';
import { NotFound } from './core/not-found/not-found';
import { ActorList } from './feature/actor/actor-list/actor-list';

const routes: Routes = [
  { path: '', redirectTo: 'movie-list', pathMatch: 'full' },
  { path: 'movie-list', component: MovieList },
  { path: 'movie-create', component: MovieCreate },
  { path: 'movie-edit/:id', component: MovieEdit },
  { path: 'movie-detail/:id', component: MovieDetail },
  { path: 'actor-list', component: ActorList },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
