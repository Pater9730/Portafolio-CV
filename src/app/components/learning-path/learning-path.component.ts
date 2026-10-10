import { Component } from '@angular/core';
import { CV } from '../../data/cv.data';
import { FadeOnScrollDirective } from '../../directives/fade-on-scroll.directive';

@Component({
  selector: 'ap-learning-path',
  standalone: true,
  imports: [FadeOnScrollDirective],
  templateUrl: './learning-path.component.html',
  styleUrl: './learning-path.component.css',
})
export class LearningPathComponent { cv = CV; }
