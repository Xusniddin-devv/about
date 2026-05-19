import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

interface NewsItem {
  date: string;
  views: number;
  titleKey: string;
  image: string;
}

@Component({
  selector: 'home-news',
  imports: [TranslocoModule, RouterLink],
  templateUrl: './news.section.html',
})
export class NewsSection {
  protected readonly items: NewsItem[] = [
    { date: '2026-05-19', views: 831,  titleKey: 'news.n1', image: '/hero.jpg' },
    { date: '2026-05-19', views: 874,  titleKey: 'news.n2', image: '/hero.png' },
    { date: '2026-05-18', views: 1068, titleKey: 'news.n3', image: '/ges.png' },
  ];
}
