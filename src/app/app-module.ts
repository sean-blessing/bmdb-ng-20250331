import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MovieList } from './feature/movie/movie-list/movie-list';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MovieDetail } from './feature/movie/movie-detail/movie-detail';
import { MovieCreate } from './feature/movie/movie-create/movie-create';
import { MovieEdit } from './feature/movie/movie-edit/movie-edit';
import { NotFound } from './core/not-found/not-found';
import { FormsModule } from '@angular/forms';
import { ActorList } from './feature/actor/actor-list/actor-list';
import { Menu } from './core/menu/menu';
import { ActorCreate } from './feature/actor/actor-create/actor-create';
import { CreditList } from './feature/credit/credit-list/credit-list';
import { CreditCreate } from './feature/credit/credit-create/credit-create';
import { CreditDetail } from './feature/credit/credit-detail/credit-detail';
import { CreditEdit } from './feature/credit/credit-edit/credit-edit';
import { UserLogin } from './feature/user/user-login/user-login';

@NgModule({
  declarations: [
    App,
    MovieList,
    MovieDetail,
    MovieCreate,
    MovieEdit,
    NotFound,
    ActorList,
    Menu,
    ActorCreate,
    CreditList,
    CreditCreate,
    CreditEdit,
    CreditDetail,
    UserLogin,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [App],
})
export class AppModule {}
