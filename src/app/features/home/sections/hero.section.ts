import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'home-hero',
  imports: [TranslocoModule],
  templateUrl: './hero.section.html',
})
export class HeroSection {}
