import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from '../../model/hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {};

  @Output() selectedHero: EventEmitter<Hero>;

  constructor(
    private router: Router
  ) {
    this.selectedHero = new EventEmitter<Hero>();
  }

  ngOnInit(): void {
  }

  verHeroe(): void {
    console.log(`Heroe index: ${this.hero.id}`);
    this.router.navigate(['heroe-detail', this.hero.id]);
   // this.selectedHero.emit(this.index);
  }
}
