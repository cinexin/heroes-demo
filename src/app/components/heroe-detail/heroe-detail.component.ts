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

  heroe: Hero;
  casa: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(
      params => {
        const heroId = params.id;
        // tslint:disable-next-line:radix
        this.heroe = heroesService.getHero(parseInt(heroId));
        this.casa = this.heroe.casa.toString();
      }
    );
  }

  ngOnInit(): void {
  }

}
