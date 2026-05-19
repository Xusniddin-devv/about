import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'home-cta',
  imports: [TranslocoModule],
  templateUrl: './cta.section.html',
})
export class CtaSection {}
