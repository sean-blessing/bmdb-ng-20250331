import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieList } from './feature/movie/movie-list/movie-list';
import { MovieCreate } from './feature/movie/movie-create/movie-create';
import { MovieDetail } from './feature/movie/movie-detail/movie-detail';
import { MovieEdit } from './feature/movie/movie-edit/movie-edit';
import { NotFound } from './core/not-found/not-found';
import { ActorList } from './feature/actor/actor-list/actor-list';
import { ActorCreate } from './feature/actor/actor-create/actor-create';
import { CreditCreate } from './feature/credit/credit-create/credit-create';
import { CreditDetail } from './feature/credit/credit-detail/credit-detail';
import { CreditEdit } from './feature/credit/credit-edit/credit-edit';
import { CreditList } from './feature/credit/credit-list/credit-list';
import { UserLogin } from './feature/user/user-login/user-login';
import { MovieCredit } from './feature/movie/movie-credit/movie-credit';

const routes: Routes = [
  { path: '', redirectTo: 'movie-list', pathMatch: 'full' },
  { path: 'movie-list', component: MovieList },
  { path: 'movie-create', component: MovieCreate },
  { path: 'movie-edit/:id', component: MovieEdit },
  { path: 'movie-detail/:id', component: MovieDetail },
  { path: 'movie-credits/:movieId', component: MovieCredit },
  { path: 'actor-list', component: ActorList },
  { path: 'actor-create', component: ActorCreate },
  { path: 'credit-list', component: CreditList },
  { path: 'credit-create', component: CreditCreate },
  { path: 'credit-edit/:id', component: CreditEdit },
  { path: 'credit-detail/:id', component: CreditDetail },
  { path: 'user-login', component: UserLogin },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
