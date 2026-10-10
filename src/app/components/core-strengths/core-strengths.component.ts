import { Component } from '@angular/core';
import { CV } from '../../data/cv.data';
import { FadeOnScrollDirective } from '../../directives/fade-on-scroll.directive';

@Component({
  selector: 'ap-core-strengths',
  standalone: true,
  imports: [FadeOnScrollDirective],
  templateUrl: './core-strengths.component.html',
  styleUrl: './core-strengths.component.css',
})
export class CoreStrengthsComponent { cv = CV; }
