import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-gallery',
  imports: [TranslocoModule],
  template: `
    <ng-container *transloco="let t">
    <section class="py-28">
      <div class="container-site">
        <span class="section-tag">{{ t('nav.gallery') }}</span>
        <h1 class="font-display font-bold text-ink leading-[1.1] text-[clamp(2rem,4vw,3rem)]">{{ t('nav.gallery') }}</h1>
      </div>
    </section>
    </ng-container>
  `,
})
export class Gallery {}
