import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CookieConsentService } from '../../services/cookie-consent.service';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <!-- Cookie Banner -->
    @if (cookieService.showBanner()) {
      <div class="cookie-banner animate-fade-in" role="dialog" aria-labelledby="cookie-banner-title" aria-describedby="cookie-banner-desc">
        <div class="container-main">
          <div class="flex flex-col lg:flex-row lg:items-center gap-4">
            <div class="flex-1">
              <h2 id="cookie-banner-title" class="font-heading font-bold text-lg text-brionet-charcoal mb-2">
                {{ 'COOKIES.BANNER.TITLE' | translate }}
              </h2>
              <p id="cookie-banner-desc" class="text-sm text-brionet-steel">
                {{ 'COOKIES.BANNER.DESCRIPTION' | translate }}
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
              <button 
                (click)="cookieService.rejectOptional()"
                class="btn btn-ghost btn-sm"
              >
                {{ 'COOKIES.BANNER.REJECT_OPTIONAL' | translate }}
              </button>
              <button 
                (click)="cookieService.openModal()"
                class="btn btn-outline btn-sm"
              >
                {{ 'COOKIES.BANNER.CUSTOMIZE' | translate }}
              </button>
              <button 
                (click)="cookieService.acceptAll()"
                class="btn btn-brionet btn-sm"
              >
                {{ 'COOKIES.BANNER.ACCEPT_ALL' | translate }}
              </button>
            </div>
          </div>
        </div>
      </div>
    }

    <!-- Cookie Preferences Modal -->
    @if (cookieService.showModal()) {
      <div class="modal modal-open" role="dialog" aria-modal="true" aria-labelledby="cookie-modal-title">
        <div class="modal-backdrop" (click)="cookieService.closeModal()"></div>
        <div class="modal-box max-w-2xl bg-white">
          <button 
            (click)="cookieService.closeModal()" 
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            aria-label="Fermer"
          >
            ✕
          </button>
          
          <h3 id="cookie-modal-title" class="font-heading font-bold text-xl text-brionet-charcoal mb-2">
            {{ 'COOKIES.MODAL.TITLE' | translate }}
          </h3>
          <p class="text-sm text-brionet-steel mb-6">
            {{ 'COOKIES.MODAL.DESCRIPTION' | translate }}
          </p>

          <div class="space-y-4">
            <!-- Necessary Cookies -->
            <div class="card bg-brionet-offwhite">
              <div class="card-body p-4">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <h4 class="font-semibold text-brionet-charcoal">
                      {{ 'COOKIES.MODAL.NECESSARY.TITLE' | translate }}
                    </h4>
                    <p class="text-sm text-brionet-steel mt-1">
                      {{ 'COOKIES.MODAL.NECESSARY.DESCRIPTION' | translate }}
                    </p>
                  </div>
                  <div class="badge badge-primary">
                    {{ 'COOKIES.MODAL.NECESSARY.ALWAYS_ON' | translate }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Analytics Cookies -->
            <div class="card bg-brionet-offwhite">
              <div class="card-body p-4">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <h4 class="font-semibold text-brionet-charcoal">
                      {{ 'COOKIES.MODAL.ANALYTICS.TITLE' | translate }}
                    </h4>
                    <p class="text-sm text-brionet-steel mt-1">
                      {{ 'COOKIES.MODAL.ANALYTICS.DESCRIPTION' | translate }}
                    </p>
                  </div>
                  <input 
                    type="checkbox" 
                    class="toggle toggle-primary"
                    [checked]="analyticsEnabled()"
                    (change)="analyticsEnabled.set(!analyticsEnabled())"
                    aria-label="Activer les cookies analytiques"
                  />
                </div>
              </div>
            </div>

            <!-- Marketing Cookies -->
            <div class="card bg-brionet-offwhite">
              <div class="card-body p-4">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <h4 class="font-semibold text-brionet-charcoal">
                      {{ 'COOKIES.MODAL.MARKETING.TITLE' | translate }}
                    </h4>
                    <p class="text-sm text-brionet-steel mt-1">
                      {{ 'COOKIES.MODAL.MARKETING.DESCRIPTION' | translate }}
                    </p>
                  </div>
                  <input 
                    type="checkbox" 
                    class="toggle toggle-primary"
                    [checked]="marketingEnabled()"
                    (change)="marketingEnabled.set(!marketingEnabled())"
                    aria-label="Activer les cookies marketing"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="modal-action mt-6 flex-col sm:flex-row gap-3">
            <button 
              (click)="savePreferences()"
              class="btn btn-outline flex-1"
            >
              {{ 'COOKIES.MODAL.SAVE' | translate }}
            </button>
            <button 
              (click)="acceptAll()"
              class="btn btn-brionet flex-1"
            >
              {{ 'COOKIES.MODAL.ACCEPT_ALL' | translate }}
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 80;
    }
    
    .modal-box {
      position: relative;
      z-index: 90;
    }
  `]
})
export class CookieBannerComponent {
  readonly cookieService = inject(CookieConsentService);

  // Local state for the modal toggles
  readonly analyticsEnabled = signal(this.cookieService.consent()?.analytics ?? false);
  readonly marketingEnabled = signal(this.cookieService.consent()?.marketing ?? false);

  savePreferences(): void {
    this.cookieService.savePreferences(
      this.analyticsEnabled(),
      this.marketingEnabled()
    );
  }

  acceptAll(): void {
    this.analyticsEnabled.set(true);
    this.marketingEnabled.set(true);
    this.cookieService.acceptAll();
  }
}

