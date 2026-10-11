import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CV } from '../../data/cv.data';
import { copyMail } from '../../utils/mail';

@Component({
  selector: 'ap-intro-banner',
  standalone: true,
  templateUrl: './intro-banner.component.html',
  styleUrl: './intro-banner.component.css',
})
export class IntroBannerComponent implements OnInit, OnDestroy {
  cv = CV;
  roleIndex = signal(0);
  fading = signal(false);
  private timer?: any;

  mail(e: Event) {
    e.preventDefault();
    copyMail(this.cv.email);
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.fading.set(true);
      setTimeout(() => {
        this.roleIndex.update((i) => (i + 1) % this.cv.roles.length);
        this.fading.set(false);
      }, 400);
    }, 2800);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
