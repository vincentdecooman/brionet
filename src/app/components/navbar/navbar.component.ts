import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <header class="navbar-brionet" role="banner">
      <nav class="container-main navbar" aria-label="Navigation principale">
        <!-- Logo -->
        <div class="navbar-start">
          <a href="#hero" class="flex items-center gap-2 text-xl font-heading font-bold text-brionet-red" aria-label="Brio-Net - Retour à l'accueil">
            <!-- Logo SVG -->
            <svg class="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="40" height="40" rx="8" fill="#C1121F"/>
              <path d="M10 20C10 14.477 14.477 10 20 10V10C25.523 10 30 14.477 30 20V30H20C14.477 30 10 25.523 10 20V20Z" fill="white"/>
              <circle cx="20" cy="20" r="5" fill="#C1121F"/>
            </svg>
            <span class="hidden sm:inline">Brio-Net</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal gap-1" role="menubar">
            <li role="none">
              <a href="#services" class="nav-link" role="menuitem">{{ 'NAV.SERVICES' | translate }}</a>
            </li>
            <li role="none">
              <a href="#markets" class="nav-link" role="menuitem">{{ 'NAV.MARKETS' | translate }}</a>
            </li>
            <li role="none">
              <a href="#regions" class="nav-link" role="menuitem">{{ 'NAV.REGIONS' | translate }}</a>
            </li>
            <li role="none">
              <a href="#about" class="nav-link" role="menuitem">{{ 'NAV.ABOUT' | translate }}</a>
            </li>
            <li role="none">
              <a href="#testimonials" class="nav-link" role="menuitem">{{ 'NAV.TESTIMONIALS' | translate }}</a>
            </li>
            <li role="none">
              <a href="#faq" class="nav-link" role="menuitem">{{ 'NAV.FAQ' | translate }}</a>
            </li>
          </ul>
        </div>

        <!-- Desktop Actions -->
        <div class="navbar-end gap-2">
          <!-- Language Switcher -->
          <div class="dropdown dropdown-end">
            <button 
              tabindex="0" 
              class="btn btn-ghost btn-sm gap-1"
              aria-label="Changer de langue / Change language"
              aria-haspopup="listbox"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
              <span class="hidden sm:inline">{{ currentLang() === 'fr-CA' ? 'FR' : 'EN' }}</span>
            </button>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow-lg bg-white rounded-box w-32 z-50" role="listbox">
              <li role="option" [attr.aria-selected]="currentLang() === 'fr-CA'">
                <button 
                  (click)="switchLanguage('fr-CA')" 
                  class="text-sm"
                  [class.font-bold]="currentLang() === 'fr-CA'"
                >
                  Français
                </button>
              </li>
              <li role="option" [attr.aria-selected]="currentLang() === 'en'">
                <button 
                  (click)="switchLanguage('en')" 
                  class="text-sm"
                  [class.font-bold]="currentLang() === 'en'"
                >
                  English
                </button>
              </li>
            </ul>
          </div>

          <!-- CTA Button (Desktop) -->
          <a 
            href="#contact" 
            class="btn btn-brionet btn-sm hidden md:flex"
          >
            {{ 'NAV.REQUEST_QUOTE' | translate }}
          </a>

          <!-- Mobile Menu Button -->
          <button 
            class="btn btn-ghost lg:hidden"
            (click)="toggleMobileMenu()"
            [attr.aria-expanded]="mobileMenuOpen()"
            aria-controls="mobile-menu"
            aria-label="Menu"
          >
            @if (mobileMenuOpen()) {
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            } @else {
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            }
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      @if (mobileMenuOpen()) {
        <div 
          id="mobile-menu" 
          class="lg:hidden bg-white border-t shadow-lg animate-fade-in"
          role="menu"
        >
          <ul class="menu p-4 gap-2">
            <li role="none">
              <a href="#services" (click)="closeMobileMenu()" class="text-lg" role="menuitem">{{ 'NAV.SERVICES' | translate }}</a>
            </li>
            <li role="none">
              <a href="#markets" (click)="closeMobileMenu()" class="text-lg" role="menuitem">{{ 'NAV.MARKETS' | translate }}</a>
            </li>
            <li role="none">
              <a href="#regions" (click)="closeMobileMenu()" class="text-lg" role="menuitem">{{ 'NAV.REGIONS' | translate }}</a>
            </li>
            <li role="none">
              <a href="#about" (click)="closeMobileMenu()" class="text-lg" role="menuitem">{{ 'NAV.ABOUT' | translate }}</a>
            </li>
            <li role="none">
              <a href="#testimonials" (click)="closeMobileMenu()" class="text-lg" role="menuitem">{{ 'NAV.TESTIMONIALS' | translate }}</a>
            </li>
            <li role="none">
              <a href="#faq" (click)="closeMobileMenu()" class="text-lg" role="menuitem">{{ 'NAV.FAQ' | translate }}</a>
            </li>
            <li role="none" class="mt-4">
              <a 
                href="#contact" 
                (click)="closeMobileMenu()" 
                class="btn btn-brionet w-full justify-center"
                role="menuitem"
              >
                {{ 'NAV.REQUEST_QUOTE' | translate }}
              </a>
            </li>
            <li role="none" class="mt-2">
              <a 
                href="tel:+1XXXXXXXXXX" 
                class="btn btn-brionet-outline w-full justify-center"
                role="menuitem"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {{ 'NAV.CALL_US' | translate }}
              </a>
            </li>
          </ul>
        </div>
      }
    </header>
  `,
  styles: [`
    .nav-link {
      @apply font-medium text-brionet-charcoal hover:text-brionet-red transition-colors;
    }
    
    .nav-link:focus-visible {
      @apply outline-2 outline-offset-2 outline-brionet-red rounded;
    }
  `]
})
export class NavbarComponent {
  private readonly translateService = inject(TranslateService);
  private readonly seoService = inject(SeoService);
  private readonly document = inject(DOCUMENT);

  readonly mobileMenuOpen = signal(false);
  readonly currentLang = signal(this.translateService.currentLang || 'fr-CA');

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeMobileMenu();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  switchLanguage(lang: string): void {
    this.translateService.use(lang);
    this.currentLang.set(lang);
    this.seoService.updateMetaForLanguage(lang);
    
    // Store preference
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('brionet_lang', lang);
    }
  }
}

