import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Credit } from '../../../model/credit';
import { Movie } from '../../../model/movie';
import { MovieService } from '../../../service/movie-service';
import { ActivatedRoute } from '@angular/router';
import { CreditService } from '../../../service/credit-service';

@Component({
  selector: 'app-movie-credit',
  standalone: false,
  templateUrl: './movie-credit.html',
  styleUrl: './movie-credit.css',
})
export class MovieCredit implements OnInit, OnDestroy {
  title: string = 'Movie-Credits';
  subscription!: Subscription;
  movieId!: number;
  movie!: Movie;
  credits!: Credit[];

  constructor(
    private movieSvc: MovieService,
    private actRoute: ActivatedRoute,
    private creditSvc: CreditService
  ) {}

  ngOnInit(): void {
    // get the movieId
    this.actRoute.params.subscribe((parms) => {
      this.movieId = parms['movieId'];
      // get the movie for that id
      this.subscription = this.movieSvc.getById(this.movieId).subscribe({
        next: (resp) => {
          this.movie = resp;
          console.log("movie for Id"+this.movieId, this.movie);
        },
        error: (err) => {
          console.log('Error retrieving Movie for id: ' + this.movieId, err);
        },
      });
      // get the credits by movieId
      this.subscription = this.creditSvc.getCreditsForMovie(this.movieId).subscribe({
        next: (resp) => {
          this.credits = resp;
          console.log("credits for movieId"+this.movieId, this.credits);
        },
        error: (err) => {
          console.log('Error getting Credits for Movie', err);
        },
      });
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
