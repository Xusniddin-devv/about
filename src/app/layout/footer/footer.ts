import { Component, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LangService } from '../../core/services/lang.service';

@Component({
  selector: 'app-footer',
  imports: [TranslocoModule],
  templateUrl: './footer.html',
})
export class Footer {
  protected lang = inject(LangService);
  protected readonly year = new Date().getFullYear();

  protected langLabel(l: 'ru' | 'uz' | 'en'): string {
    return l === 'ru' ? 'Русский' : l === 'uz' ? 'O‘zbekcha' : 'English';
  }
}
