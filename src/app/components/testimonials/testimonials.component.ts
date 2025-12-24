import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Testimonial {
  TEXT: string;
  AUTHOR: string;
  LOCATION: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section 
      id="testimonials" 
      class="section bg-gradient-to-br from-brionet-charcoal to-brionet-steel"
      aria-labelledby="testimonials-title"
    >
      <div class="container-main">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 id="testimonials-title" class="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            {{ 'TESTIMONIALS.TITLE' | translate }}
          </h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            {{ 'TESTIMONIALS.SUBTITLE' | translate }}
          </p>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid md:grid-cols-3 gap-6 sm:gap-8">
          @for (testimonial of getTestimonials(); track $index) {
            <article class="card bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
              <div class="card-body p-6">
                <!-- Quote Icon -->
                <div class="mb-4">
                  <svg class="w-10 h-10 text-brionet-red opacity-80" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                <!-- Quote Text -->
                <blockquote class="text-white mb-6 leading-relaxed">
                  "{{ testimonial.TEXT }}"
                </blockquote>
                
                <!-- Author -->
                <footer class="mt-auto">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-brionet-red/20 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-brionet-red" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <cite class="text-white font-semibold not-italic block">
                        {{ testimonial.AUTHOR }}
                      </cite>
                      <span class="text-gray-400 text-sm">{{ testimonial.LOCATION }}</span>
                    </div>
                  </div>
                </footer>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  private readonly translateService = inject(TranslateService);

  getTestimonials(): Testimonial[] {
    const items = this.translateService.instant('TESTIMONIALS.ITEMS');
    return Array.isArray(items) ? items : [];
  }
}

