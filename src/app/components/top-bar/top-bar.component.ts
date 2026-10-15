import { Component, HostListener, OnInit, signal } from '@angular/core';

@Component({
  selector: 'ap-top-bar',
  standalone: true,
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent implements OnInit {
  scrolled = signal(false);
  progress = signal(0);
  dark = signal(false);

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
      this.dark.set(localStorage.getItem('theme') === 'dark');
    } catch {}
    this.apply();
  }

  toggle() {
    this.dark.update((value) => !value);
    this.apply();
    try {
      localStorage.setItem('theme', this.dark() ? 'dark' : 'light');
    } catch {}
  }

  private apply() {
    document.documentElement.setAttribute('data-theme', this.dark() ? 'dark' : 'light');
  }

  @HostListener('window:scroll')
  onScroll() {
    const h = document.documentElement;
    this.scrolled.set(h.scrollTop > 60);
    this.progress.set((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
  }
}
