import { Directive, ElementRef, OnInit } from '@angular/core';

/** Fades an element in once it scrolls into view. */
@Directive({
  selector: '[fadeOnScroll]',
  standalone: true,
})
export class FadeOnScrollDirective implements OnInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const element = this.el.nativeElement;
    element.classList.add('fade-on-scroll');

    new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          element.classList.add('in-view');
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    ).observe(element);
  }
}
