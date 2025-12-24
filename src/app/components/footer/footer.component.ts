import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CookieConsentService } from '../../services/cookie-consent.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <footer class="bg-brionet-charcoal text-white" role="contentinfo">
      <div class="container-main py-16 px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Brand Column -->
          <div class="lg:col-span-1">
            <a href="#hero" class="flex items-center gap-2 text-xl font-heading font-bold text-white mb-4">
              <svg class="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="40" height="40" rx="8" fill="#C1121F"/>
                <path d="M10 20C10 14.477 14.477 10 20 10V10C25.523 10 30 14.477 30 20V30H20C14.477 30 10 25.523 10 20V20Z" fill="white"/>
                <circle cx="20" cy="20" r="5" fill="#C1121F"/>
              </svg>
              <span>Brio-Net</span>
            </a>
            <p class="text-gray-400 mb-6">
              {{ 'FOOTER.DESCRIPTION' | translate }}
            </p>
            <p class="text-sm text-gray-500">
              {{ 'FOOTER.REGIONS_SERVED' | translate }}
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-heading font-bold text-lg mb-4">{{ 'FOOTER.QUICK_LINKS' | translate }}</h3>
            <ul class="space-y-3">
              <li>
                <a href="#services" class="text-gray-400 hover:text-brionet-red transition-colors">
                  {{ 'NAV.SERVICES' | translate }}
                </a>
              </li>
              <li>
                <a href="#markets" class="text-gray-400 hover:text-brionet-red transition-colors">
                  {{ 'NAV.MARKETS' | translate }}
                </a>
              </li>
              <li>
                <a href="#about" class="text-gray-400 hover:text-brionet-red transition-colors">
                  {{ 'NAV.ABOUT' | translate }}
                </a>
              </li>
              <li>
                <a href="#faq" class="text-gray-400 hover:text-brionet-red transition-colors">
                  {{ 'NAV.FAQ' | translate }}
                </a>
              </li>
              <li>
                <a href="#contact" class="text-gray-400 hover:text-brionet-red transition-colors">
                  {{ 'NAV.CONTACT' | translate }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="font-heading font-bold text-lg mb-4">{{ 'FOOTER.SERVICES' | translate }}</h3>
            <ul class="space-y-3">
              <li>
                <a href="#contact" class="text-gray-400 hover:text-brionet-red transition-colors">
                  LAVAGE DE VITRE
                </a>
              </li>
              <li>
                <a href="#contact" class="text-gray-400 hover:text-brionet-red transition-colors">
                  CONCIERGERIE
                </a>
              </li>
              <li>
                <a href="#contact" class="text-gray-400 hover:text-brionet-red transition-colors">
                  ENTRETIEN MÉNAGER
                </a>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3 class="font-heading font-bold text-lg mb-4">{{ 'FOOTER.LEGAL' | translate }}</h3>
            <ul class="space-y-3">
              <li>
                <a href="/privacy" class="text-gray-400 hover:text-brionet-red transition-colors">
                  {{ 'FOOTER.PRIVACY' | translate }}
                </a>
              </li>
              <li>
                <button 
                  (click)="openCookieSettings()" 
                  class="text-gray-400 hover:text-brionet-red transition-colors text-left"
                >
                  {{ 'FOOTER.COOKIES' | translate }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800">
        <div class="container-main py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm text-center md:text-left">
            {{ 'FOOTER.COPYRIGHT' | translate:{ year: currentYear } }}
          </p>
          
          <!-- Back to Top -->
          <a 
            href="#hero" 
            class="btn btn-ghost btn-sm text-gray-400 hover:text-white gap-2"
            [attr.aria-label]="'COMMON.BACK_TO_TOP' | translate"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
            {{ 'COMMON.BACK_TO_TOP' | translate }}
          </a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  private readonly translateService = inject(TranslateService);
  private readonly cookieService = inject(CookieConsentService);

  readonly currentYear = new Date().getFullYear();

  openCookieSettings(): void {
    this.cookieService.openModal();
  }
}

