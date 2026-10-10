import { Component } from '@angular/core';
import { CV } from '../../data/cv.data';
import { FadeOnScrollDirective } from '../../directives/fade-on-scroll.directive';

@Component({
  selector: 'ap-tech-stack',
  standalone: true,
  imports: [FadeOnScrollDirective],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css',
})
export class TechStackComponent { cv = CV; }
