import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section 
      id="about" 
      class="section section-dark"
      aria-labelledby="about-title"
    >
      <div class="container-main">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Content -->
          <div class="order-2 lg:order-1">
            <h2 id="about-title" class="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-brionet-charcoal mb-4">
              {{ 'ABOUT.TITLE' | translate }}
            </h2>
            <p class="text-base sm:text-lg text-brionet-red font-semibold mb-4 sm:mb-6">
              {{ 'ABOUT.SUBTITLE' | translate }}
            </p>
            <p class="text-sm sm:text-base text-brionet-steel mb-6 sm:mb-8 leading-relaxed">
              {{ 'ABOUT.DESCRIPTION' | translate }}
            </p>
            
            <a href="#contact" class="btn btn-brionet btn-sm sm:btn-md md:btn-lg gap-2 w-full sm:w-auto">
              <span class="text-xs sm:text-sm md:text-base">{{ 'HERO.CTA_PRIMARY' | translate }}</span>
              <svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          <!-- Values Grid -->
          <div class="order-1 lg:order-2">
            <h3 class="text-lg sm:text-xl font-heading font-bold text-brionet-charcoal mb-4 sm:mb-6">
              {{ 'ABOUT.VALUES.TITLE' | translate }}
            </h3>
            <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <!-- Quality -->
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-brionet-red/10 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-brionet-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <h4 class="font-heading font-bold text-brionet-charcoal mb-2">
                  {{ 'ABOUT.VALUES.QUALITY.TITLE' | translate }}
                </h4>
                <p class="text-sm text-brionet-steel">
                  {{ 'ABOUT.VALUES.QUALITY.DESCRIPTION' | translate }}
                </p>
              </div>

              <!-- Reliability -->
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-brionet-red/10 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-brionet-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 class="font-heading font-bold text-brionet-charcoal mb-2">
                  {{ 'ABOUT.VALUES.RELIABILITY.TITLE' | translate }}
                </h4>
                <p class="text-sm text-brionet-steel">
                  {{ 'ABOUT.VALUES.RELIABILITY.DESCRIPTION' | translate }}
                </p>
              </div>

              <!-- Safety -->
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-brionet-red/10 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-brionet-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h4 class="font-heading font-bold text-brionet-charcoal mb-2">
                  {{ 'ABOUT.VALUES.SAFETY.TITLE' | translate }}
                </h4>
                <p class="text-sm text-brionet-steel">
                  {{ 'ABOUT.VALUES.SAFETY.DESCRIPTION' | translate }}
                </p>
              </div>

              <!-- Service -->
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-brionet-red/10 rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-brionet-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h4 class="font-heading font-bold text-brionet-charcoal mb-2">
                  {{ 'ABOUT.VALUES.SERVICE.TITLE' | translate }}
                </h4>
                <p class="text-sm text-brionet-steel">
                  {{ 'ABOUT.VALUES.SERVICE.DESCRIPTION' | translate }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}

