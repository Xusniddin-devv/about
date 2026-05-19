import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { TENDERS } from './tenders.data';

@Component({
  selector: 'app-tenders',
  imports: [TranslocoModule, RouterLink],
  templateUrl: './tenders.html',
})
export class Tenders {
  protected readonly items = TENDERS;

  protected statusLabel(s: 'open' | 'closed' | 'evaluating'): string {
    return s === 'open' ? 'Ochiq' : s === 'closed' ? 'Yopilgan' : 'Baholash';
  }

  protected statusColor(s: 'open' | 'closed' | 'evaluating'): string {
    return s === 'open'
      ? 'bg-emerald-600 text-white'
      : s === 'closed'
      ? 'bg-muted text-white'
      : 'bg-accent text-ink';
  }
}
