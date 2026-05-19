import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

interface TenderItem {
  date: string;
  views: number;
  titleKey: string;
  image: string;
}

@Component({
  selector: 'home-tenders',
  imports: [TranslocoModule, RouterLink],
  templateUrl: './tenders.section.html',
})
export class TendersSection {
  protected readonly items: TenderItem[] = [
    { date: '2026-05-18', views: 156,  titleKey: 'tendersList.t1', image: '/ges1.png' },
    { date: '2026-04-06', views: 1117, titleKey: 'tendersList.t2', image: '/hero.jpg' },
    { date: '2026-03-26', views: 766,  titleKey: 'tendersList.t3', image: '/hero.png' },
  ];
}
