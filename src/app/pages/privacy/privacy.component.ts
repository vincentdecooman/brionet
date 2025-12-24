import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieBannerComponent } from '../../components/cookie-banner/cookie-banner.component';
import { CookieConsentService } from '../../services/cookie-consent.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NavbarComponent,
    FooterComponent,
    CookieBannerComponent
  ],
  template: `
    <app-navbar />
    
    <main id="main-content" class="pt-20" role="main">
      <div class="section section-light">
        <article class="container-main max-w-4xl">
          <header class="mb-12">
            <h1 class="text-3xl md:text-4xl font-heading font-bold text-brionet-charcoal mb-4">
              {{ 'PRIVACY.TITLE' | translate }}
            </h1>
            <p class="text-brionet-steel">
              {{ 'PRIVACY.LAST_UPDATED' | translate }}: {{ lastUpdated }}
            </p>
          </header>

          <div class="prose prose-lg max-w-none">
            <!-- Introduction -->
            <section class="mb-10">
              <h2 class="text-2xl font-heading font-bold text-brionet-charcoal mb-4">
                {{ 'PRIVACY.SECTIONS.INTRO.TITLE' | translate }}
              </h2>
              <p class="text-brionet-steel leading-relaxed">
                {{ 'PRIVACY.SECTIONS.INTRO.CONTENT' | translate }}
              </p>
            </section>

            <!-- Information Collection -->
            <section class="mb-10">
              <h2 class="text-2xl font-heading font-bold text-brionet-charcoal mb-4">
                {{ 'PRIVACY.SECTIONS.COLLECTION.TITLE' | translate }}
              </h2>
              <p class="text-brionet-steel leading-relaxed">
                {{ 'PRIVACY.SECTIONS.COLLECTION.CONTENT' | translate }}
              </p>
            </section>

            <!-- Use of Information -->
            <section class="mb-10">
              <h2 class="text-2xl font-heading font-bold text-brionet-charcoal mb-4">
                {{ 'PRIVACY.SECTIONS.USE.TITLE' | translate }}
              </h2>
              <p class="text-brionet-steel leading-relaxed">
                {{ 'PRIVACY.SECTIONS.USE.CONTENT' | translate }}
              </p>
            </section>

            <!-- Cookies -->
            <section class="mb-10">
              <h2 class="text-2xl font-heading font-bold text-brionet-charcoal mb-4">
                {{ 'PRIVACY.SECTIONS.COOKIES.TITLE' | translate }}
              </h2>
              <p class="text-brionet-steel leading-relaxed mb-4">
                {{ 'PRIVACY.SECTIONS.COOKIES.CONTENT' | translate }}
              </p>
              <button 
                (click)="openCookieSettings()"
                class="btn btn-brionet-outline"
              >
                {{ 'FOOTER.COOKIES' | translate }}
              </button>
            </section>

            <!-- Your Rights -->
            <section class="mb-10">
              <h2 class="text-2xl font-heading font-bold text-brionet-charcoal mb-4">
                {{ 'PRIVACY.SECTIONS.RIGHTS.TITLE' | translate }}
              </h2>
              <p class="text-brionet-steel leading-relaxed">
                {{ 'PRIVACY.SECTIONS.RIGHTS.CONTENT' | translate }}
              </p>
            </section>

            <!-- Contact -->
            <section class="mb-10">
              <h2 class="text-2xl font-heading font-bold text-brionet-charcoal mb-4">
                {{ 'PRIVACY.SECTIONS.CONTACT.TITLE' | translate }}
              </h2>
              <p class="text-brionet-steel leading-relaxed mb-4">
                {{ 'PRIVACY.SECTIONS.CONTACT.CONTENT' | translate }}
              </p>
              <a href="/#contact" class="btn btn-brionet">
                {{ 'NAV.CONTACT' | translate }}
              </a>
            </section>
          </div>

          <!-- Back Link -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <a href="/" class="btn btn-ghost gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              {{ currentLang === 'fr-CA' ? 'Retour à l\'accueil' : 'Back to home' }}
            </a>
          </div>
        </article>
      </div>
    </main>
    
    <app-footer />
    <app-cookie-banner />
  `
})
export class PrivacyComponent implements OnInit {
  private readonly translateService = inject(TranslateService);
  private readonly cookieService = inject(CookieConsentService);
  private readonly seoService = inject(SeoService);

  readonly lastUpdated = new Date().toLocaleDateString('fr-CA');
  currentLang = 'fr-CA';

  ngOnInit(): void {
    // Initialize language from localStorage or default to fr-CA
    let savedLang = 'fr-CA';
    if (typeof localStorage !== 'undefined') {
      savedLang = localStorage.getItem('brionet_lang') || 'fr-CA';
    }
    
    this.currentLang = savedLang;
    this.translateService.setDefaultLang('fr-CA');
    this.translateService.use(savedLang);
    this.seoService.updateMetaForLanguage(savedLang);

    // Listen for language changes
    this.translateService.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  openCookieSettings(): void {
    this.cookieService.openModal();
  }
}

