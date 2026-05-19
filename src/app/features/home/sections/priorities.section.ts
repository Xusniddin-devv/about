import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

type IconKey = 'bolt' | 'shield' | 'crane' | 'chart' | 'wave' | 'snow';

@Component({
  selector: 'home-priorities',
  imports: [TranslocoModule],
  templateUrl: './priorities.section.html',
})
export class PrioritiesSection {
  protected readonly items: { num: string; icon: IconKey; titleKey: string; textKey: string }[] = [
    { num: '01', icon: 'bolt',   titleKey: 'priorities.p1Title', textKey: 'priorities.p1Text' },
    { num: '02', icon: 'shield', titleKey: 'priorities.p2Title', textKey: 'priorities.p2Text' },
    { num: '03', icon: 'crane',  titleKey: 'priorities.p3Title', textKey: 'priorities.p3Text' },
    { num: '04', icon: 'chart',  titleKey: 'priorities.p4Title', textKey: 'priorities.p4Text' },
    { num: '05', icon: 'wave',   titleKey: 'priorities.p5Title', textKey: 'priorities.p5Text' },
    { num: '06', icon: 'snow',   titleKey: 'priorities.p6Title', textKey: 'priorities.p6Text' },
  ];
}
