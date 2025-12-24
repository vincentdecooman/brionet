import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface FaqItem {
  QUESTION: string;
  ANSWER: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section 
      id="faq" 
      class="section section-light"
      aria-labelledby="faq-title"
    >
      <div class="container-main max-w-4xl">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 id="faq-title" class="text-3xl md:text-4xl font-heading font-bold text-brionet-charcoal mb-4">
            {{ 'FAQ.TITLE' | translate }}
          </h2>
          <p class="text-lg text-brionet-steel max-w-2xl mx-auto">
            {{ 'FAQ.SUBTITLE' | translate }}
          </p>
        </div>

        <!-- FAQ Accordion -->
        <div class="space-y-4" role="region" aria-label="Questions fréquentes">
          @for (item of getFaqItems(); track $index) {
            <div class="collapse collapse-arrow bg-white shadow-md rounded-lg border border-gray-100">
              <input 
                type="checkbox" 
                [id]="'faq-' + $index"
                [attr.aria-controls]="'faq-content-' + $index"
              />
              <label 
                [for]="'faq-' + $index"
                class="collapse-title text-lg font-heading font-semibold text-brionet-charcoal cursor-pointer hover:text-brionet-red transition-colors pr-12"
              >
                {{ item.QUESTION }}
              </label>
              <div 
                [id]="'faq-content-' + $index"
                class="collapse-content"
              >
                <p class="text-brionet-steel pt-2 pb-4 leading-relaxed">
                  {{ item.ANSWER }}
                </p>
              </div>
            </div>
          }
        </div>

        <!-- CTA -->
        <div class="text-center mt-8 sm:mt-12 px-4">
          <p class="text-sm sm:text-base text-brionet-steel mb-3 sm:mb-4">
            {{ 'FAQ.MORE_QUESTIONS' | translate }}
          </p>
          <a href="#contact" class="btn btn-brionet btn-sm sm:btn-md md:btn-lg gap-2 w-full sm:w-auto">
            <span class="text-xs sm:text-sm md:text-base">{{ 'HERO.CTA_PRIMARY' | translate }}</span>
            <svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
})
export class FaqComponent {
  private readonly translateService = inject(TranslateService);

  getFaqItems(): FaqItem[] {
    const items = this.translateService.instant('FAQ.ITEMS');
    return Array.isArray(items) ? items : [];
  }
}

