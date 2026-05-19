import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-leadership',
  imports: [TranslocoModule],
  template: `
    <ng-container *transloco="let t">
    <section class="py-28">
      <div class="container-site">
        <span class="section-tag">{{ t('nav.leadership') }}</span>
        <h1 class="font-display font-bold text-ink leading-[1.1] text-[clamp(2rem,4vw,3rem)]">{{ t('nav.leadership') }}</h1>
      </div>
    </section>
    </ng-container>
  `,
})
export class Leadership {}
