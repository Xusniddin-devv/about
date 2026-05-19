import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LangService } from '../../../core/services/lang.service';

interface StatDef {
  target: number;
  decimals: number;
  prefix?: string;
  suffix?: string;
  labelKey: string;
  icon: 'img' | 'finish';
  iconSrc?: string;
}

@Component({
  selector: 'home-stats',
  imports: [TranslocoModule],
  templateUrl: './stats.section.html',
})
export class StatsSection implements AfterViewInit {
  private lang = inject(LangService);

  protected readonly statsRef = viewChild<ElementRef<HTMLElement>>('statsSection');
  private animated = false;

  protected readonly statDefs: StatDef[] = [
    { target: 38, decimals: 0, suffix: '+', labelKey: 'stats.ongoing', icon: 'img', iconSrc: '/ges.png' },
    { target: 16, decimals: 0, labelKey: 'stats.prospective', icon: 'img', iconSrc: '/ges1.png' },
    { target: 67, decimals: 0, labelKey: 'stats.completed', icon: 'finish' },
  ];

  protected readonly statValues = signal<string[]>(
    this.statDefs.map(s => this.format(1, s))
  );

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;
    const el = this.statsRef()?.nativeElement;
    if (!el || !('IntersectionObserver' in window)) {
      this.animateStats();
      return;
    }
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (e.isIntersecting && !this.animated) {
          this.animated = true;
          this.animateStats();
          io.disconnect();
        }
      }
    }, { threshold: 0.3 });
    io.observe(el);
  }

  private format(value: number, def: StatDef): string {
    const locale = this.lang.locale();
    const num = def.decimals === 0
      ? Math.floor(value).toLocaleString(locale)
      : value.toFixed(def.decimals).replace('.', locale === 'en-US' ? '.' : ',');
    return `${def.prefix ?? ''}${num}${def.suffix ?? ''}`;
  }

  private animateStats(): void {
    const duration = 1800;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const k = ease(t);
      const next = this.statDefs.map(def => {
        const value = 1 + (def.target - 1) * k;
        return this.format(value, def);
      });
      this.statValues.set(next);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
