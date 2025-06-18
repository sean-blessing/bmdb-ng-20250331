import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../../../model/movie';
import { MovieService } from '../../../service/movie-service';
import { SystemService } from '../../../service/system-service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit, OnDestroy {
  title: string = 'Movie-List';
  subscription!: Subscription;
  movies: Movie[] = [];
  welcomeName: string = '';

  constructor(private movieSvc: MovieService,
              private sysSvc: SystemService
  ) {}

  ngOnInit(): void {
    this.welcomeName = this.sysSvc.loggedInUser.firstName;
    // call movieSvc and populate list of movies
    this.subscription = this.movieSvc.list().subscribe({
      next: (resp) => {
        this.movies = resp;
        console.log('movies', this.movies);
      },
      error: (err) => {
        console.log('Error retrieving movies list.', err);
      },
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  delete(id: number) {
    this.subscription = this.movieSvc.delete(id).subscribe({
      next: () => {
        // refresh the movie list
        this.subscription = this.movieSvc.list().subscribe((resp) => {
          this.movies = resp;
        });
      },
      error: (err) => {
        console.log('Error deleting movie for id: ' + id);
        alert('Error deleting movie for id: ' + id);
      },
    });
  }
}
