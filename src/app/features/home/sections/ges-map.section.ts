import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

interface Region {
  nameKey: string;
  capacityMw: number | null;
  count: number | null;
}

@Component({
  selector: 'home-ges-map',
  imports: [TranslocoModule],
  templateUrl: './ges-map.section.html',
})
export class GesMapSection {
  protected readonly regions: Region[] = [
    { nameKey: 'regions.karakalpakstan', capacityMw: null, count: null },
    { nameKey: 'regions.fergana', capacityMw: 7.63, count: 3 },
    { nameKey: 'regions.tashkentOblast', capacityMw: 1299.52, count: 25 },
    { nameKey: 'regions.tashkentCity', capacityMw: 32.60, count: 4 },
    { nameKey: 'regions.namangan', capacityMw: 89.60, count: 7 },
    { nameKey: 'regions.andijan', capacityMw: 227.21, count: 9 },
    { nameKey: 'regions.syrdarya', capacityMw: 128.20, count: 1 },
    { nameKey: 'regions.jizzakh', capacityMw: 0.8, count: 2 },
    { nameKey: 'regions.samarkand', capacityMw: 74, count: 19 },
    { nameKey: 'regions.kashkadarya', capacityMw: 48.75, count: 3 },
    { nameKey: 'regions.surkhandarya', capacityMw: 273.33, count: 7 },
    { nameKey: 'regions.navoi', capacityMw: null, count: null },
    { nameKey: 'regions.bukhara', capacityMw: null, count: null },
    { nameKey: 'regions.khorezm', capacityMw: 150, count: 1 },
  ];

  protected readonly total = { capacityMw: 2323.67, count: 78 };

  protected formatMw(v: number | null): string {
    if (v === null) return '—';
    return v.toLocaleString('ru-RU', { maximumFractionDigits: 2 });
  }
}
