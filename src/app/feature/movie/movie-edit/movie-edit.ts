import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../../../model/movie';
import { MovieService } from '../../../service/movie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  standalone: false,
  templateUrl: './movie-edit.html',
  styleUrl: './movie-edit.css',
})
export class MovieEdit implements OnInit, OnDestroy {
  title: string = 'Movie-Edit';
  subscription!: Subscription;
  movie!: Movie;
  movieId!: number;
  ratings: string[] = ['G', 'PG', 'PG-13', 'R', 'NC-17'];

  constructor(
    private movieSvc: MovieService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get the id from the URL
    this.actRoute.params.subscribe((parms) => {
      this.movieId = parms['id'];
      // get the movie for that id
      this.subscription = this.movieSvc.getById(this.movieId).subscribe({
        next: (resp) => {
          this.movie = resp;
        },
        error: (err) => {
          console.log('Error retrieving Movie for id: ' + this.movieId, err);
        },
      });
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  save() {
    this.subscription = this.movieSvc.update(this.movie).subscribe({
      next: (resp) => {
        this.movie = resp;
        this.router.navigateByUrl('/movie-list');
      },
      error: (err) => {
        console.log('error saving movie', err);
      },
    });
  }
}
