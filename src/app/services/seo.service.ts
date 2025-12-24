import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly translateService = inject(TranslateService);

  private readonly isBrowser = isPlatformBrowser(this.platformId);

  updateMetaForLanguage(lang: string): void {
    // Update html lang attribute
    if (this.isBrowser) {
      this.document.documentElement.lang = lang;
    }

    // Update meta tags based on language
    this.translateService.get(['META.TITLE', 'META.DESCRIPTION']).subscribe(translations => {
      this.titleService.setTitle(translations['META.TITLE']);
      
      this.metaService.updateTag({ 
        name: 'description', 
        content: translations['META.DESCRIPTION'] 
      });
      
      this.metaService.updateTag({ 
        property: 'og:title', 
        content: translations['META.TITLE'] 
      });
      
      this.metaService.updateTag({ 
        property: 'og:description', 
        content: translations['META.DESCRIPTION'] 
      });
      
      this.metaService.updateTag({ 
        property: 'twitter:title', 
        content: translations['META.TITLE'] 
      });
      
      this.metaService.updateTag({ 
        property: 'twitter:description', 
        content: translations['META.DESCRIPTION'] 
      });

      // Update OG locale
      const locale = lang === 'fr-CA' ? 'fr_CA' : 'en_CA';
      this.metaService.updateTag({ 
        property: 'og:locale', 
        content: locale 
      });
    });
  }

  updatePageTitle(titleKey: string): void {
    this.translateService.get(titleKey).subscribe(title => {
      this.titleService.setTitle(title);
    });
  }
}

