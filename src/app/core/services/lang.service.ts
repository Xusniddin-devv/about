import { inject, Injectable, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

export type Lang = 'ru' | 'uz' | 'en';

@Injectable({ providedIn: 'root' })
export class LangService {
  private transloco = inject(TranslocoService);

  readonly availableLangs: Lang[] = ['ru', 'uz', 'en'];
  readonly lang = signal<Lang>(this.transloco.getActiveLang() as Lang);

  setLang(l: Lang): void {
    this.lang.set(l);
    this.transloco.setActiveLang(l);
  }

  locale(): string {
    return this.lang() === 'en' ? 'en-US' : 'ru-RU';
  }
}
