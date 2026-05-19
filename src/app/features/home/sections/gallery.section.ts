import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

interface Photo {
  src: string;
  captionKey: string;
}

@Component({
  selector: 'home-gallery',
  imports: [TranslocoModule, RouterLink],
  templateUrl: './gallery.section.html',
})
export class GallerySection {
  protected readonly photos: Photo[] = [
    { src: '/hero.jpg', captionKey: 'gallery.p1' },
    { src: '/hero.png', captionKey: 'gallery.p2' },
    { src: '/ges.png', captionKey: 'gallery.p3' },
    { src: '/ges1.png', captionKey: 'gallery.p4' },
  ];
}
