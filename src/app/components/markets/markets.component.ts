import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-markets',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section 
      id="markets" 
      class="section section-dark"
      aria-labelledby="markets-title"
    >
      <div class="container-main">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 id="markets-title" class="text-3xl md:text-4xl font-heading font-bold text-brionet-charcoal mb-4">
            {{ 'MARKETS.TITLE' | translate }}
          </h2>
          <p class="text-lg text-brionet-steel max-w-2xl mx-auto">
            {{ 'MARKETS.SUBTITLE' | translate }}
          </p>
        </div>

        <!-- Markets Grid -->
        <div class="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <!-- Commercial -->
          <article class="card bg-white shadow-lg overflow-hidden">
            <div class="bg-gradient-to-r from-brionet-charcoal to-brionet-steel p-6">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-heading font-bold text-white">
                  {{ 'MARKETS.COMMERCIAL.TITLE' | translate }}
                </h3>
              </div>
            </div>
            <div class="card-body p-6">
              <p class="text-brionet-steel mb-6">
                {{ 'MARKETS.COMMERCIAL.DESCRIPTION' | translate }}
              </p>
              <ul class="space-y-3" role="list">
                @for (feature of getCommercialFeatures(); track $index) {
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-brionet-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-brionet-charcoal">{{ feature }}</span>
                  </li>
                }
              </ul>
            </div>
          </article>

          <!-- Residential -->
          <article class="card bg-white shadow-lg overflow-hidden">
            <div class="bg-gradient-to-r from-brionet-red to-red-700 p-6">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-heading font-bold text-white">
                  {{ 'MARKETS.RESIDENTIAL.TITLE' | translate }}
                </h3>
              </div>
            </div>
            <div class="card-body p-6">
              <p class="text-brionet-steel mb-6">
                {{ 'MARKETS.RESIDENTIAL.DESCRIPTION' | translate }}
              </p>
              <ul class="space-y-3" role="list">
                @for (feature of getResidentialFeatures(); track $index) {
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-brionet-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-brionet-charcoal">{{ feature }}</span>
                  </li>
                }
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  `
})
export class MarketsComponent {
  private readonly translateService = inject(TranslateService);

  getCommercialFeatures(): string[] {
    const features = this.translateService.instant('MARKETS.COMMERCIAL.FEATURES');
    return Array.isArray(features) ? features : [];
  }

  getResidentialFeatures(): string[] {
    const features = this.translateService.instant('MARKETS.RESIDENTIAL.FEATURES');
    return Array.isArray(features) ? features : [];
  }
}

