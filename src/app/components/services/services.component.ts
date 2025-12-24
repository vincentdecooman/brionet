import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section 
      id="services" 
      class="section section-light"
      aria-labelledby="services-title"
    >
      <div class="container-main">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 id="services-title" class="text-3xl md:text-4xl font-heading font-bold text-brionet-charcoal mb-4">
            {{ 'SERVICES.TITLE' | translate }}
          </h2>
          <p class="text-lg text-brionet-steel max-w-2xl mx-auto">
            {{ 'SERVICES.SUBTITLE' | translate }}
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid md:grid-cols-3 gap-6 sm:gap-8">
          <!-- Window Cleaning -->
          <article class="service-card group">
            <div class="service-icon text-brionet-red">
              <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16M12 4v16"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 7l2 2M15 7l2 2M7 15l2 2M15 15l2 2"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-brionet-charcoal mb-3">
              {{ 'SERVICES.WINDOW_CLEANING.TITLE' | translate }}
            </h3>
            <p class="text-brionet-steel mb-6">
              {{ 'SERVICES.WINDOW_CLEANING.DESCRIPTION' | translate }}
            </p>
            <a 
              href="#contact" 
              class="btn btn-brionet-outline btn-sm group-hover:bg-brionet-red group-hover:text-white group-hover:border-brionet-red transition-all"
            >
              {{ 'SERVICES.LEARN_MORE' | translate }}
            </a>
          </article>

          <!-- Janitorial -->
          <article class="service-card group">
            <div class="service-icon text-brionet-red">
              <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-brionet-charcoal mb-3">
              {{ 'SERVICES.JANITORIAL.TITLE' | translate }}
            </h3>
            <p class="text-brionet-steel mb-6">
              {{ 'SERVICES.JANITORIAL.DESCRIPTION' | translate }}
            </p>
            <a 
              href="#contact" 
              class="btn btn-brionet-outline btn-sm group-hover:bg-brionet-red group-hover:text-white group-hover:border-brionet-red transition-all"
            >
              {{ 'SERVICES.LEARN_MORE' | translate }}
            </a>
          </article>

          <!-- Housekeeping -->
          <article class="service-card group">
            <div class="service-icon text-brionet-red">
              <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-brionet-charcoal mb-3">
              {{ 'SERVICES.HOUSEKEEPING.TITLE' | translate }}
            </h3>
            <p class="text-brionet-steel mb-6">
              {{ 'SERVICES.HOUSEKEEPING.DESCRIPTION' | translate }}
            </p>
            <a 
              href="#contact" 
              class="btn btn-brionet-outline btn-sm group-hover:bg-brionet-red group-hover:text-white group-hover:border-brionet-red transition-all"
            >
              {{ 'SERVICES.LEARN_MORE' | translate }}
            </a>
          </article>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {}

