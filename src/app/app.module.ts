import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeEs);
registerLocaleData(localeFr);

// Routes
import {APP_ROUTING} from './app.routes';

// Services
import {HeroesService} from './services/heroes.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeDetailComponent,
    HeroSearchComponent,
    HeroCardComponent,
    CapitalizePipe,
    SecureDomPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService,
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
