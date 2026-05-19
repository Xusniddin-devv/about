import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'home-sub-orgs',
  imports: [TranslocoModule],
  templateUrl: './sub-orgs.section.html',
})
export class SubOrgsSection {
  protected readonly orgs = [
    { nameKey: 'subOrgs.o1' },
    { nameKey: 'subOrgs.o2' },
    { nameKey: 'subOrgs.o3' },
    { nameKey: 'subOrgs.o4' },
    { nameKey: 'subOrgs.o5' },
    { nameKey: 'subOrgs.o6' },
  ];
}
