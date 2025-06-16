import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actor } from '../../../model/actor';
import { ActorService } from '../../../service/actor-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-create',
  standalone: false,
  templateUrl: './actor-create.html',
  styleUrl: './actor-create.css'
})
export class ActorCreate implements OnInit, OnDestroy{
  title: string = 'Actor Create';
  subscription!: Subscription;
  newActor: Actor = new Actor();
  genders: String[] = ["M", "F"];

  constructor(private actorSvc: ActorService,
              private router: Router
  ){}

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  addActor() {
    this.subscription = this.actorSvc.add(this.newActor).subscribe({
      next: () => {
        this.router.navigateByUrl('/actor-list');
      },
      error: (err) => {
        console.log("Error creating Movie", err);
      }
    });
  }

}
