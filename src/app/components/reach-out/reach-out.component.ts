import { Component } from '@angular/core';
import { CV } from '../../data/cv.data';
import { copyMail } from '../../utils/mail';
import { FadeOnScrollDirective } from '../../directives/fade-on-scroll.directive';

@Component({
  selector: 'ap-reach-out',
  standalone: true,
  imports: [FadeOnScrollDirective],
  templateUrl: './reach-out.component.html',
  styleUrl: './reach-out.component.css',
})
export class ReachOutComponent {
  cv = CV;

  mail(e: Event) {
    e.preventDefault();
    copyMail(this.cv.email);
  }
}
