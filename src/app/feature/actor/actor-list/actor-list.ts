import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actor } from '../../../model/actor';
import { ActorService } from '../../../service/actor-service';

@Component({
  selector: 'app-actor-list',
  standalone: false,
  templateUrl: './actor-list.html',
  styleUrl: './actor-list.css'
})
export class ActorList implements OnInit, OnDestroy{
  title: string = 'Actor-List';
  actors!: Actor[];
  subscription!: Subscription;

  constructor(private actorSvc: ActorService) {}

  ngOnInit(): void {
    this.subscription = this.actorSvc.list().subscribe({
      next: (resp) => {
        this.actors = resp;
      },
      error: (err) => {
        console.log('Error retrieving all actors', err);
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
