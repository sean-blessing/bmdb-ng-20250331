import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menu-item';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  title: string = "BMDB";
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    // initialize menuItems
    this.menuItems = [
      new MenuItem('Movie', '/movie-list', 'Movie List'),
      new MenuItem('Actor', '/actor-list', 'Actor List')
    ];
  }



}
