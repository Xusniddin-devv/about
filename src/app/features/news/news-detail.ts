import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoModule } from '@jsverse/transloco';
import { findNews, NEWS } from './news.data';

@Component({
  selector: 'app-news-detail',
  imports: [TranslocoModule, RouterLink],
  templateUrl: './news-detail.html',
})
export class NewsDetail {
  private route = inject(ActivatedRoute);
  protected readonly params = toSignal(this.route.paramMap, { requireSync: true });

  protected readonly item = computed(() => {
    const id = this.params().get('id') ?? '';
    return findNews(id);
  });

  protected readonly related = computed(() => {
    const current = this.item();
    return NEWS.filter(n => n.id !== current?.id).slice(0, 3);
  });
}
