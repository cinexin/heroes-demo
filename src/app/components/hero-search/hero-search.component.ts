import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Hero} from '../../model/hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  filteredHeroes: Hero[];

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const searchTerm = params.searchTerm;
        this.filteredHeroes = this.heroesService.searchHero(searchTerm);
      });
  }

  verHeroe(index: number): void {
    console.log(`Hero index: ${index}`);
    const hero = this.filteredHeroes[index] ? this.filteredHeroes[index] : this.filteredHeroes[0];
    console.log(`Hero selected: ${hero}`);
    this.router.navigate(['heroe-detail', index]);
  }
}
