import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../../../model/movie';
import { MovieService } from '../../../service/movie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  standalone: false,
  templateUrl: './movie-create.html',
  styleUrl: './movie-create.css'
})
export class MovieCreate implements OnInit, OnDestroy{
  title: string = "Movie-Create";
  subscription!: Subscription;
  newMovie: Movie = new Movie();
  ratings: string[] = ['G', 'PG', 'PG-13', 'R', 'NC-17'];

  constructor(private movieSvc: MovieService,
              private router: Router
  ){}

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addMovie() {
    this.subscription = this.movieSvc.add(this.newMovie).subscribe({
      next: () => {
        this.router.navigateByUrl('/movie-list');
      },
      error: (err) => {
        console.log("Error creating new movie.", err);
      }
    });
  }

}
