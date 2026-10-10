import { Component } from '@angular/core';
import { CV } from '../../data/cv.data';
import { FadeOnScrollDirective } from '../../directives/fade-on-scroll.directive';

@Component({
  selector: 'ap-project-showcase',
  standalone: true,
  imports: [FadeOnScrollDirective],
  templateUrl: './project-showcase.component.html',
  styleUrl: './project-showcase.component.css',
})
export class ProjectShowcaseComponent { cv = CV; }
