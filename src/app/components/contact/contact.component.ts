import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  template: `
    <section 
      id="contact" 
      class="section section-dark"
      aria-labelledby="contact-title"
    >
      <div class="container-main">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 id="contact-title" class="text-3xl md:text-4xl font-heading font-bold text-brionet-charcoal mb-4">
            {{ 'CONTACT.TITLE' | translate }}
          </h2>
          <p class="text-lg text-brionet-steel max-w-2xl mx-auto">
            {{ 'CONTACT.SUBTITLE' | translate }}
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <form 
              [formGroup]="contactForm" 
              (ngSubmit)="onSubmit()"
              class="card bg-white shadow-lg p-6 md:p-8"
            >
              <!-- Honeypot field - hidden from users, catches bots -->
              <input 
                type="checkbox" 
                name="botcheck" 
                class="hidden" 
                style="display: none;"
                tabindex="-1"
                autocomplete="off"
              />

              <div class="grid md:grid-cols-2 gap-6">
                <!-- Name -->
                <div class="form-control">
                  <label class="label" for="name">
                    <span class="label-text font-semibold text-brionet-charcoal">
                      {{ 'CONTACT.FORM.NAME' | translate }} *
                    </span>
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    formControlName="name"
                    class="input input-bordered w-full focus:input-primary"
                    [class.input-error]="isFieldInvalid('name')"
                    [placeholder]="'CONTACT.FORM.NAME_PLACEHOLDER' | translate"
                    autocomplete="name"
                  />
                  @if (isFieldInvalid('name')) {
                    <label class="label">
                      <span class="label-text-alt text-error">
                        {{ 'CONTACT.FORM.REQUIRED' | translate }}
                      </span>
                    </label>
                  }
                </div>

                <!-- Email -->
                <div class="form-control">
                  <label class="label" for="email">
                    <span class="label-text font-semibold text-brionet-charcoal">
                      {{ 'CONTACT.FORM.EMAIL' | translate }} *
                    </span>
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    formControlName="email"
                    class="input input-bordered w-full focus:input-primary"
                    [class.input-error]="isFieldInvalid('email')"
                    [placeholder]="'CONTACT.FORM.EMAIL_PLACEHOLDER' | translate"
                    autocomplete="email"
                  />
                  @if (isFieldInvalid('email')) {
                    <label class="label">
                      <span class="label-text-alt text-error">
                        @if (contactForm.get('email')?.hasError('required')) {
                          {{ 'CONTACT.FORM.REQUIRED' | translate }}
                        } @else {
                          {{ 'CONTACT.FORM.INVALID_EMAIL' | translate }}
                        }
                      </span>
                    </label>
                  }
                </div>

                <!-- Phone -->
                <div class="form-control">
                  <label class="label" for="phone">
                    <span class="label-text font-semibold text-brionet-charcoal">
                      {{ 'CONTACT.FORM.PHONE' | translate }}
                    </span>
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    formControlName="phone"
                    class="input input-bordered w-full focus:input-primary"
                    [placeholder]="'CONTACT.FORM.PHONE_PLACEHOLDER' | translate"
                    autocomplete="tel"
                  />
                </div>

                <!-- Service -->
                <div class="form-control">
                  <label class="label" for="service">
                    <span class="label-text font-semibold text-brionet-charcoal">
                      {{ 'CONTACT.FORM.SERVICE' | translate }} *
                    </span>
                  </label>
                  <select 
                    id="service"
                    formControlName="service"
                    class="select select-bordered w-full focus:select-primary"
                    [class.select-error]="isFieldInvalid('service')"
                  >
                    <option value="" disabled>{{ 'CONTACT.FORM.SERVICE_PLACEHOLDER' | translate }}</option>
                    <option value="LAVAGE DE VITRE">LAVAGE DE VITRE</option>
                    <option value="CONCIERGERIE">CONCIERGERIE</option>
                    <option value="ENTRETIEN MÉNAGER">ENTRETIEN MÉNAGER</option>
                  </select>
                  @if (isFieldInvalid('service')) {
                    <label class="label">
                      <span class="label-text-alt text-error">
                        {{ 'CONTACT.FORM.REQUIRED' | translate }}
                      </span>
                    </label>
                  }
                </div>

                <!-- Region -->
                <div class="form-control md:col-span-2">
                  <label class="label" for="region">
                    <span class="label-text font-semibold text-brionet-charcoal">
                      {{ 'CONTACT.FORM.REGION' | translate }} *
                    </span>
                  </label>
                  <select 
                    id="region"
                    formControlName="region"
                    class="select select-bordered w-full focus:select-primary"
                    [class.select-error]="isFieldInvalid('region')"
                  >
                    <option value="" disabled>{{ 'CONTACT.FORM.REGION_PLACEHOLDER' | translate }}</option>
                    <option value="Saint-Jean-Sur-Richelieu">Saint-Jean-Sur-Richelieu</option>
                    <option value="Montréal">Montréal</option>
                    <option value="Rive-Sud">Rive-Sud</option>
                  </select>
                  @if (isFieldInvalid('region')) {
                    <label class="label">
                      <span class="label-text-alt text-error">
                        {{ 'CONTACT.FORM.REQUIRED' | translate }}
                      </span>
                    </label>
                  }
                </div>

                <!-- Message -->
                <div class="form-control md:col-span-2">
                  <label class="label" for="message">
                    <span class="label-text font-semibold text-brionet-charcoal">
                      {{ 'CONTACT.FORM.MESSAGE' | translate }} *
                    </span>
                  </label>
                  <textarea 
                    id="message"
                    formControlName="message"
                    class="textarea textarea-bordered w-full h-32 focus:textarea-primary"
                    [class.textarea-error]="isFieldInvalid('message')"
                    [placeholder]="'CONTACT.FORM.MESSAGE_PLACEHOLDER' | translate"
                  ></textarea>
                  @if (isFieldInvalid('message')) {
                    <label class="label">
                      <span class="label-text-alt text-error">
                        {{ 'CONTACT.FORM.REQUIRED' | translate }}
                      </span>
                    </label>
                  }
                </div>
              </div>

              <!-- Submit Button -->
              <div class="mt-8">
                <button 
                  type="submit" 
                  class="btn btn-brionet btn-sm sm:btn-md md:btn-lg w-full gap-2"
                  [disabled]="status() === 'submitting'"
                >
                  @if (status() === 'submitting') {
                    <span class="loading loading-spinner loading-sm"></span>
                    <span class="text-xs sm:text-sm md:text-base">{{ 'CONTACT.FORM.SUBMITTING' | translate }}</span>
                  } @else {
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span class="text-xs sm:text-sm md:text-base">{{ 'CONTACT.FORM.SUBMIT' | translate }}</span>
                  }
                </button>
              </div>
            </form>

            <!-- Success Message -->
            @if (status() === 'success') {
              <div class="alert alert-success mt-6 shadow-lg" role="alert">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <h3 class="font-bold">{{ 'CONTACT.SUCCESS.TITLE' | translate }}</h3>
                  <p class="text-sm">{{ 'CONTACT.SUCCESS.MESSAGE' | translate }}</p>
                </div>
              </div>
            }

            <!-- Error Message -->
            @if (status() === 'error') {
              <div class="alert alert-error mt-6 shadow-lg" role="alert">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <h3 class="font-bold">{{ 'CONTACT.ERROR.TITLE' | translate }}</h3>
                  <p class="text-sm">{{ 'CONTACT.ERROR.MESSAGE' | translate }}</p>
                </div>
              </div>
            }
          </div>

          <!-- Contact Info Sidebar -->
          <div class="lg:col-span-1">
            <div class="card bg-gradient-to-br from-brionet-charcoal to-brionet-steel text-white shadow-lg p-6 md:p-8 sticky top-24">
              <h3 class="text-xl font-heading font-bold mb-6">
                {{ 'CONTACT.INFO.TITLE' | translate }}
              </h3>

              <div class="space-y-6">
                <!-- Phone -->
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-brionet-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-brionet-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold mb-1">{{ 'CONTACT.INFO.PHONE' | translate }}</p>
                    <a href="tel:+1XXXXXXXXXX" class="text-gray-300 hover:text-brionet-red transition-colors">
                      +1 (XXX) XXX-XXXX
                    </a>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-brionet-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-brionet-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold mb-1">{{ 'CONTACT.INFO.EMAIL' | translate }}</p>
                    <a href="mailto:info@brio-net.ca" class="text-gray-300 hover:text-brionet-red transition-colors">
                      info&#64;brio-net.ca
                    </a>
                  </div>
                </div>

                <!-- Hours -->
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-brionet-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-brionet-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold mb-1">{{ 'CONTACT.INFO.HOURS' | translate }}</p>
                    <p class="text-gray-300">{{ 'CONTACT.INFO.HOURS_VALUE' | translate }}</p>
                  </div>
                </div>
              </div>

              <!-- Quick Call CTA -->
              <div class="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
                <a 
                  href="tel:+1XXXXXXXXXX" 
                  class="btn bg-white text-brionet-charcoal hover:bg-brionet-red hover:text-white w-full gap-2 transition-colors btn-sm sm:btn-md"
                >
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span class="text-xs sm:text-sm">{{ 'NAV.CALL_US' | translate }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly translateService = inject(TranslateService);

  readonly status = signal<FormStatus>('idle');

  readonly contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    service: ['', [Validators.required]],
    region: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.status.set('submitting');

    const formData = new FormData();
    
    // Web3Forms access key
    formData.append('access_key', '7345d878-0486-44e6-8d47-a21af69de875');
    
    // Form fields
    formData.append('name', this.contactForm.get('name')?.value || '');
    formData.append('email', this.contactForm.get('email')?.value || '');
    formData.append('phone', this.contactForm.get('phone')?.value || '');
    formData.append('service', this.contactForm.get('service')?.value || '');
    formData.append('region', this.contactForm.get('region')?.value || '');
    formData.append('message', this.contactForm.get('message')?.value || '');
    
    // Honeypot
    formData.append('botcheck', '');
    
    // Subject line
    const lang = this.translateService.currentLang;
    const subject = lang === 'fr-CA' 
      ? 'Nouvelle demande de soumission - Brio-Net' 
      : 'New Quote Request - Brio-Net';
    formData.append('subject', subject);

    this.http.post('https://api.web3forms.com/submit', formData)
      .subscribe({
        next: () => {
          this.status.set('success');
          this.contactForm.reset();
          // Reset form to initial state
          setTimeout(() => {
            this.status.set('idle');
          }, 5000);
        },
        error: () => {
          this.status.set('error');
          setTimeout(() => {
            this.status.set('idle');
          }, 5000);
        }
      });
  }
}

