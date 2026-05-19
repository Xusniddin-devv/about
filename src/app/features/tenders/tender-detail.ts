import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoModule } from '@jsverse/transloco';
import { findTender } from './tenders.data';

@Component({
  selector: 'app-tender-detail',
  imports: [TranslocoModule, RouterLink],
  templateUrl: './tender-detail.html',
})
export class TenderDetail {
  private route = inject(ActivatedRoute);
  protected readonly params = toSignal(this.route.paramMap, { requireSync: true });

  protected readonly item = computed(() => {
    const id = this.params().get('id') ?? '';
    return findTender(id);
  });

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
