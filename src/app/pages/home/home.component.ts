import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { MarketsComponent } from '../../components/markets/markets.component';
import { RegionsComponent } from '../../components/regions/regions.component';
import { AboutComponent } from '../../components/about/about.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieBannerComponent } from '../../components/cookie-banner/cookie-banner.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    MarketsComponent,
    RegionsComponent,
    AboutComponent,
    TestimonialsComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    CookieBannerComponent
  ],
  template: `
    <app-navbar />
    
    <main id="main-content" role="main">
      <app-hero />
      <app-services />
      <app-markets />
      <app-regions />
      <app-about />
      <app-testimonials />
      <app-faq />
      <app-contact />
    </main>
    
    <app-footer />
    <app-cookie-banner />
  `
})
export class HomeComponent implements OnInit {
  private readonly translateService = inject(TranslateService);
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    // Initialize language from localStorage or default to fr-CA
    let savedLang = 'fr-CA';
    if (typeof localStorage !== 'undefined') {
      savedLang = localStorage.getItem('brionet_lang') || 'fr-CA';
    }
    
    this.translateService.setDefaultLang('fr-CA');
    this.translateService.use(savedLang);
    this.seoService.updateMetaForLanguage(savedLang);

    // Listen for language changes
    this.translateService.onLangChange.subscribe(event => {
      this.seoService.updateMetaForLanguage(event.lang);
    });
  }
}

