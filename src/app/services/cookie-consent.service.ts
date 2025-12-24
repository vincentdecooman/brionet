import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
}

const CONSENT_KEY = 'brionet_cookie_consent';
const CONSENT_VERSION = '1.0';

@Injectable({
  providedIn: 'root'
})
export class CookieConsentService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  // Signals for reactive state management
  private readonly _consent = signal<CookieConsent | null>(null);
  private readonly _showBanner = signal<boolean>(false);
  private readonly _showModal = signal<boolean>(false);

  // Public readonly computed signals
  readonly consent = this._consent.asReadonly();
  readonly showBanner = this._showBanner.asReadonly();
  readonly showModal = this._showModal.asReadonly();

  readonly hasConsent = computed(() => this._consent() !== null);
  readonly analyticsAllowed = computed(() => this._consent()?.analytics ?? false);
  readonly marketingAllowed = computed(() => this._consent()?.marketing ?? false);

  constructor() {
    this.loadConsent();
  }

  private loadConsent(): void {
    if (!this.isBrowser) return;

    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const consent = JSON.parse(stored) as CookieConsent;
        // Check if consent version matches
        if (consent.version === CONSENT_VERSION) {
          this._consent.set(consent);
          this._showBanner.set(false);
          // Load analytics/marketing scripts if consented
          this.applyConsent(consent);
        } else {
          // Version mismatch, show banner again
          this._showBanner.set(true);
        }
      } else {
        // No consent stored, show banner
        this._showBanner.set(true);
      }
    } catch {
      this._showBanner.set(true);
    }
  }

  acceptAll(): void {
    const consent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION
    };
    this.saveConsent(consent);
  }

  rejectOptional(): void {
    const consent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION
    };
    this.saveConsent(consent);
  }

  savePreferences(analytics: boolean, marketing: boolean): void {
    const consent: CookieConsent = {
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION
    };
    this.saveConsent(consent);
  }

  private saveConsent(consent: CookieConsent): void {
    if (!this.isBrowser) return;

    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
      this._consent.set(consent);
      this._showBanner.set(false);
      this._showModal.set(false);
      this.applyConsent(consent);
    } catch (error) {
      console.error('Failed to save cookie consent:', error);
    }
  }

  private applyConsent(consent: CookieConsent): void {
    // Load analytics scripts only if consented
    if (consent.analytics) {
      this.loadAnalytics();
    }

    // Load marketing scripts only if consented
    if (consent.marketing) {
      this.loadMarketing();
    }
  }

  private loadAnalytics(): void {
    // Stub loader for analytics - disabled by default
    // Replace with actual analytics implementation when ready
    // Example: Google Analytics, Plausible, etc.
    console.log('Analytics consent granted - analytics scripts would load here');
    
    // Example Google Analytics implementation (commented out):
    // if (typeof window !== 'undefined' && !document.getElementById('ga-script')) {
    //   const script = document.createElement('script');
    //   script.id = 'ga-script';
    //   script.async = true;
    //   script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    //   document.head.appendChild(script);
    // }
  }

  private loadMarketing(): void {
    // Stub loader for marketing scripts - disabled by default
    // Replace with actual marketing implementation when ready
    console.log('Marketing consent granted - marketing scripts would load here');
  }

  openModal(): void {
    this._showModal.set(true);
  }

  closeModal(): void {
    this._showModal.set(false);
  }

  closeBanner(): void {
    this._showBanner.set(false);
  }

  // Method to reset consent (for testing or user request)
  resetConsent(): void {
    if (!this.isBrowser) return;

    localStorage.removeItem(CONSENT_KEY);
    this._consent.set(null);
    this._showBanner.set(true);
    this._showModal.set(false);
  }
}

