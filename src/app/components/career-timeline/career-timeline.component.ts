import { Component } from '@angular/core';
import { CV } from '../../data/cv.data';
import { FadeOnScrollDirective } from '../../directives/fade-on-scroll.directive';

@Component({
  selector: 'ap-career-timeline',
  standalone: true,
  imports: [FadeOnScrollDirective],
  templateUrl: './career-timeline.component.html',
  styleUrl: './career-timeline.component.css',
})
export class CareerTimelineComponent { cv = CV; }
