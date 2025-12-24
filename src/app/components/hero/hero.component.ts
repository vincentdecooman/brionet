import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section 
      id="hero" 
      class="hero min-h-[90vh] bg-gradient-to-br from-brionet-offwhite via-white to-brionet-offwhite relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5" aria-hidden="true">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F1F1F" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute top-20 right-10 w-64 h-64 bg-brionet-red/10 rounded-full blur-3xl" aria-hidden="true"></div>
      <div class="absolute bottom-20 left-10 w-48 h-48 bg-brionet-red/5 rounded-full blur-2xl" aria-hidden="true"></div>

      <div class="hero-content text-center py-12 sm:py-16 md:py-20 px-4 relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Tagline Badge -->
          <div class="inline-flex items-center gap-2 bg-brionet-red/10 text-brionet-red px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 animate-fade-in">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-semibold text-xs sm:text-sm">{{ 'HERO.TAGLINE' | translate }}</span>
          </div>

          <!-- Main Title -->
          <h1 
            id="hero-title" 
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brionet-charcoal mb-4 sm:mb-6 px-2 animate-fade-in stagger-1"
          >
            {{ 'HERO.TITLE' | translate }}
          </h1>

          <!-- Description -->
          <p class="text-base sm:text-lg md:text-xl text-brionet-steel max-w-2xl mx-auto mb-8 sm:mb-10 px-2 animate-fade-in stagger-2">
            {{ 'HERO.DESCRIPTION' | translate }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in stagger-3 px-4">
            <a 
              href="#contact" 
              class="btn btn-brionet btn-sm sm:btn-md md:btn-lg gap-2 w-full sm:w-auto"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
              <span class="text-xs sm:text-sm md:text-base">{{ 'HERO.CTA_PRIMARY' | translate }}</span>
            </a>
            <a 
              href="#services" 
              class="btn btn-brionet-outline btn-sm sm:btn-md md:btn-lg gap-2 w-full sm:w-auto"
            >
              <span class="text-xs sm:text-sm md:text-base">{{ 'HERO.CTA_SECONDARY' | translate }}</span>
              <svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </a>
          </div>

          <!-- Trust Indicators -->
          <div class="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 animate-fade-in stagger-4 px-4">
            <p class="text-xs sm:text-sm text-brionet-steel mb-3 sm:mb-4">Commercial et résidentiel</p>
            <div class="flex flex-wrap justify-center gap-4 sm:gap-6 text-brionet-steel text-xs sm:text-sm">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-brionet-red" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-medium">Saint-Jean-sur-Richelieu</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-brionet-red" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-medium">Montréal</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-brionet-red" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-medium">Rive-Sud</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg class="w-6 h-6 text-brionet-steel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>
  `
})
export class HeroComponent {}

