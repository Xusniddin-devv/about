import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { LangService } from '../../core/services/lang.service';

interface NavChild {
  path: string;
  labelKey: string;
}
interface NavItem {
  path?: string;
  labelKey: string;
  children?: NavChild[];
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslocoModule],
  templateUrl: './header.html',
})
export class Header {
  protected lang = inject(LangService);
  private host = inject(ElementRef<HTMLElement>);

  protected readonly openMenu = signal<string | null>(null);

  protected readonly navItems: NavItem[] = [
    { path: '/', labelKey: 'nav.home' },
    {
      labelKey: 'nav.about',
      children: [
        { path: '/about/legal-status',       labelKey: 'aboutMenu.legalStatus' },
        { path: '/about',                    labelKey: 'aboutMenu.info' },
        { path: '/about/structure',          labelKey: 'aboutMenu.structure' },
        { path: '/about/leadership',         labelKey: 'aboutMenu.leadership' },
        { path: '/about/executive',          labelKey: 'aboutMenu.executive' },
        { path: '/about/advisors',           labelKey: 'aboutMenu.advisors' },
        { path: '/about/system-enterprises', labelKey: 'aboutMenu.systemEnterprises' },
        { path: '/about/vacancies',          labelKey: 'aboutMenu.vacancies' },
      ],
    },
    { path: '/news',     labelKey: 'nav.news' },
    { path: '/tenders',  labelKey: 'nav.tenders' },
    { path: '/gallery',  labelKey: 'nav.gallery' },
    { path: '/contacts', labelKey: 'nav.contacts' },
  ];

  toggle(key: string): void {
    this.openMenu.set(this.openMenu() === key ? null : key);
  }

  close(): void {
    this.openMenu.set(null);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent): void {
    if (!this.host.nativeElement.contains(e.target as Node)) this.close();
  }

  @HostListener('document:keydown.escape')
  onEsc(): void { this.close(); }
}
