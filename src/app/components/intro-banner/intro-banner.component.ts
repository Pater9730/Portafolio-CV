import { Component, OnDestroy, OnInit } from '@angular/core';
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
  i = 0;
  out = false;
  private timer?: any;

  mail(e: Event) {
    e.preventDefault();
    copyMail(this.cv.email);
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.out = true;
      setTimeout(() => {
        this.i = (this.i + 1) % this.cv.roles.length;
        this.out = false;
      }, 400);
    }, 2800);
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
