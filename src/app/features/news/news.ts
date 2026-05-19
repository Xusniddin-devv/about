import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { NEWS } from './news.data';

@Component({
  selector: 'app-news',
  imports: [TranslocoModule, RouterLink],
  templateUrl: './news.html',
})
export class News {
  protected readonly items = NEWS;
}
