import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

interface ReportItem {
  year: string;
  titleKey: string;
  href: string;
}

@Component({
  selector: 'home-reports',
  imports: [TranslocoModule],
  templateUrl: './reports.section.html',
})
export class ReportsSection {
  protected readonly items: ReportItem[] = [
    { year: '2025', titleKey: 'reports.r1', href: '#' },
    { year: '2024', titleKey: 'reports.r2', href: '#' },
    { year: '2023', titleKey: 'reports.r3', href: '#' },
  ];
}
