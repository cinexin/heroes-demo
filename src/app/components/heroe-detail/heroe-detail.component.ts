import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';
import {Hero} from '../../model/hero';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  hero: Hero;
  casa: string;
  dataPromise: Promise<string>;
  dataFetched = false;
  showRealName = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const heroId = params.id;
        // tslint:disable-next-line:radix
        this.hero = this.heroesService.getHero(parseInt(heroId));
        this.casa = this.hero.casa.toString();
      }
    );
    this.dataPromise = new Promise<any>(
      resolve => {
        setTimeout(() => {
          this.dataFetched = true;
          resolve('Info sobre Héroe obtenida satisfactoriamente');
        }, 500);
      }
    );
  }

  toggleShowRealName(): void {
    this.showRealName = !this.showRealName;
  }
}
