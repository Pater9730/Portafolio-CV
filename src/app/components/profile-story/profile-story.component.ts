import { Component } from '@angular/core';
import { CV } from '../../data/cv.data';
import { FadeOnScrollDirective } from '../../directives/fade-on-scroll.directive';

@Component({
  selector: 'ap-profile-story',
  standalone: true,
  imports: [FadeOnScrollDirective],
  templateUrl: './profile-story.component.html',
  styleUrl: './profile-story.component.css',
})
export class ProfileStoryComponent {
  cv = CV;
  highlights = [['🔐', 'APIs REST seguras', 'JWT, Identity y refresh tokens'], ['⚡', 'Tiempo real', 'SignalR y notificaciones push'], ['🏗️', 'Arquitectura limpia', 'Capas, SOLID y CQRS'], ['🔗', 'Integraciones', 'Servicios externos y SAP']];
}
