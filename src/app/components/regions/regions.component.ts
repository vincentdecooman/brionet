import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-regions',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section 
      id="regions" 
      class="section section-light"
      aria-labelledby="regions-title"
    >
      <div class="container-main">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 id="regions-title" class="text-3xl md:text-4xl font-heading font-bold text-brionet-charcoal mb-4">
            {{ 'REGIONS.TITLE' | translate }}
          </h2>
          <p class="text-lg text-brionet-steel max-w-2xl mx-auto">
            {{ 'REGIONS.SUBTITLE' | translate }}
          </p>
        </div>

        <!-- Regions Grid -->
        <div class="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <!-- Saint-Jean-sur-Richelieu -->
          <article class="card bg-gradient-to-br from-brionet-offwhite to-white shadow-lg hover:shadow-xl transition-shadow">
            <div class="card-body items-center text-center p-8">
              <div class="w-16 h-16 bg-brionet-red/10 rounded-full flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-brionet-red" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold text-brionet-charcoal mb-2">
                {{ 'REGIONS.AREAS.STJEAN.NAME' | translate }}
              </h3>
              <p class="text-brionet-steel text-sm">
                {{ 'REGIONS.AREAS.STJEAN.DESCRIPTION' | translate }}
              </p>
              <div class="mt-4 badge badge-primary badge-outline">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                Depuis 2003
              </div>
            </div>
          </article>

          <!-- Montréal -->
          <article class="card bg-gradient-to-br from-brionet-offwhite to-white shadow-lg hover:shadow-xl transition-shadow">
            <div class="card-body items-center text-center p-8">
              <div class="w-16 h-16 bg-brionet-red/10 rounded-full flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-brionet-red" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold text-brionet-charcoal mb-2">
                {{ 'REGIONS.AREAS.MONTREAL.NAME' | translate }}
              </h3>
              <p class="text-brionet-steel text-sm">
                {{ 'REGIONS.AREAS.MONTREAL.DESCRIPTION' | translate }}
              </p>
            </div>
          </article>

          <!-- Rive-Sud -->
          <article class="card bg-gradient-to-br from-brionet-offwhite to-white shadow-lg hover:shadow-xl transition-shadow">
            <div class="card-body items-center text-center p-8">
              <div class="w-16 h-16 bg-brionet-red/10 rounded-full flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-brionet-red" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold text-brionet-charcoal mb-2">
                {{ 'REGIONS.AREAS.SOUTHSHORE.NAME' | translate }}
              </h3>
              <p class="text-brionet-steel text-sm">
                {{ 'REGIONS.AREAS.SOUTHSHORE.DESCRIPTION' | translate }}
              </p>
            </div>
          </article>
        </div>

        <!-- CTA -->
        <div class="text-center">
          <a href="#contact" class="btn btn-brionet btn-sm sm:btn-md md:btn-lg gap-2 w-full sm:w-auto">
            <span class="text-xs sm:text-sm md:text-base">{{ 'REGIONS.CTA' | translate }}</span>
            <svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
})
export class RegionsComponent {}

