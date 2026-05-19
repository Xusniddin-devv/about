import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-contacts',
  imports: [TranslocoModule, ReactiveFormsModule],
  templateUrl: './contacts.html',
})
export class Contacts implements AfterViewInit {
  private fb = inject(FormBuilder);

  protected readonly submitted = signal(false);
  protected readonly error = signal<string | null>(null);
  protected readonly mapVisible = signal(false);

  protected readonly mapRef = viewChild<ElementRef<HTMLElement>>('mapBox');

  protected readonly form = this.fb.nonNullable.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    phone:   [''],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected readonly contact = {
    address:  'Toshkent, Bobur ko‘chasi, 20',
    addressFull: 'Toshkent shahar, Yashnobod tumani, Bobur ko‘chasi 20-uy, 100015',
    phone:    '+998 78 150-50-15',
    trustPhone: '+998 78 150-50-15',
    fax:      '+998 71 200-00-99',
    email:    'info@uzbekhydro.uz',
    pressEmail: 'press@uzbekhydro.uz',
    hours:    'Du–Ju · 09:00 – 18:00',
    mapEmbed: 'https://www.google.com/maps?q=Bobur+street+20,+Tashkent&output=embed',
    mapLink:  'https://www.google.com/maps?q=Bobur+street+20,+Tashkent',
  };

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;
    const el = this.mapRef()?.nativeElement;
    if (!el || !('IntersectionObserver' in window)) {
      this.mapVisible.set(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (e.isIntersecting) {
          this.mapVisible.set(true);
          io.disconnect();
          break;
        }
      }
    }, { rootMargin: '300px' });
    io.observe(el);
  }

  submit(): void {
    this.error.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set('formInvalid');
      return;
    }
    console.log('Contact form submitted:', this.form.getRawValue());
    this.submitted.set(true);
    this.form.reset();
  }

  reset(): void {
    this.submitted.set(false);
    this.error.set(null);
  }
}
