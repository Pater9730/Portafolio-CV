import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ap-top-bar',
  standalone: true,
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent implements OnInit {
  scrolled = false;
  progress = 0;
  dark = true;

  links = [
    ['about', 'Sobre mí'],
    ['strengths', 'Capacidades'],
    ['stack', 'Skills'],
    ['career', 'Experiencia'],
    ['projects', 'Proyectos'],
    ['learning', 'Estudios'],
    ['contact', 'Contacto'],
  ];

  ngOnInit() {
    try {
      this.dark = localStorage.getItem('theme') !== 'light';
    } catch {}
    this.apply();
  }

  toggle() {
    this.dark = !this.dark;
    this.apply();
    try {
      localStorage.setItem('theme', this.dark ? 'dark' : 'light');
    } catch {}
  }

  private apply() {
    document.documentElement.setAttribute('data-theme', this.dark ? 'dark' : 'light');
  }

  @HostListener('window:scroll')
  onScroll() {
    const h = document.documentElement;
    this.scrolled = h.scrollTop > 60;
    this.progress = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  }
}
