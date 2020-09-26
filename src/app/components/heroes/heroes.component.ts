import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';
import {Hero} from '../../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

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

  verHeroe(hero: Hero): void {
    this.router.navigate(['/heroe-detail', hero.id]);
  }
}
