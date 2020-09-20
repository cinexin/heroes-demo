import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) {
    console.log('Heroes component constructor');
  }

  ngOnInit(): void {
    console.log('Heroes component ngOnInit');
    this.heroes = this.heroesService.getHeroes();
    console.log('Heroes fetched: ' + this.heroes);
  }

  verHeroe(index: number): void {
    console.log(`Heroe index: ${index}`);
    const hero = this.heroes[index] ? this.heroes[index] : this.heroes[0];
    console.log(`Hero selected: ${hero}`);
    this.router.navigate(['heroe-detail', index]);
  }
}
