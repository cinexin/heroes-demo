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

  verHeroe(hero: Heroe): void {
    this.router.navigate(['/heroe-detail', hero.id]);
  }
}
