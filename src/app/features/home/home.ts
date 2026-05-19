import { Component } from '@angular/core';
import { HeroSection } from './sections/hero.section';
import { StatsSection } from './sections/stats.section';
import { PrioritiesSection } from './sections/priorities.section';
import { GesMapSection } from './sections/ges-map.section';
import { NewsSection } from './sections/news.section';
import { SubOrgsSection } from './sections/sub-orgs.section';
import { WindPowerSection } from './sections/wind-power.section';
import { TendersSection } from './sections/tenders.section';
import { ReportsSection } from './sections/reports.section';
import { GallerySection } from './sections/gallery.section';
import { CtaSection } from './sections/cta.section';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    StatsSection,
    PrioritiesSection,
    GesMapSection,
    NewsSection,
    SubOrgsSection,
    WindPowerSection,
    TendersSection,
    ReportsSection,
    GallerySection,
    CtaSection,
  ],
  templateUrl: './home.html',
})
export class Home {}
