import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CV } from '../../data/cv.data';
import { copyMail } from '../../utils/mail';
import { FadeOnScrollDirective } from '../../directives/fade-on-scroll.directive';

@Component({
  selector: 'ap-reach-out',
  standalone: true,
  imports: [FadeOnScrollDirective, ReactiveFormsModule],
  templateUrl: './reach-out.component.html',
  styleUrl: './reach-out.component.css',
})
export class ReachOutComponent {
  cv = CV;
  sent = false;

  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  mail(e: Event) {
    e.preventDefault();
    copyMail(this.cv.email);
  }

  hasError(field: 'name' | 'email' | 'message') {
    const control = this.form.controls[field];
    return control.touched && control.invalid;
  }

  send() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const subject = encodeURIComponent('Contacto desde tu portafolio - ' + v.name);
    const body = encodeURIComponent(`${v.message}\n\n${v.name} (${v.email})`);
    copyMail(this.cv.email);
    window.location.href = `mailto:${this.cv.email}?subject=${subject}&body=${body}`;
    this.sent = true;
  }
}
