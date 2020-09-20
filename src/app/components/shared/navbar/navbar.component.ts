import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(
    searchTerm: string,
  ): void {
    console.log(`Search term: ${searchTerm}`);
    this.router.navigate(['/hero-search', searchTerm]);
  }
}
