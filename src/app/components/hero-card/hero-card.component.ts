import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: number;

  @Output() selectedHero: EventEmitter<number >;

  constructor(
    private router: Router
  ) {
    this.selectedHero = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  verHeroe(): void {
    /*console.log(`Heroe index: ${this.index}`);
    this.router.navigate(['heroe-detail', this.index]);*/
    this.selectedHero.emit(this.index);
  }
}
