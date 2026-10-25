import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CV } from '../../data/cv.data';
import { copyMail, copyText } from '../../utils/mail';

@Component({
  selector: 'ap-intro-banner',
  standalone: true,
  templateUrl: './intro-banner.component.html',
  styleUrl: './intro-banner.component.css',
})
export class IntroBannerComponent implements OnInit, OnDestroy {
  cv = CV;
  roleIndex = signal(0);
  fading = signal(false);
  private timer?: any;

  whatsapp(e: Event) {
    // En Android, el enlace wa.me obliga a abrir la app "WhatsApp" normal y falla si solo
    // hay WhatsApp Business. El esquema whatsapp:// abre la que esté instalada (o deja elegir).
    if (!/Android/i.test(navigator.userAgent)) return;
    e.preventDefault();

    let opened = false;
    const onHide = () => {
      if (document.hidden) opened = true;
    };
    document.addEventListener('visibilitychange', onHide);

    window.location.href = 'whatsapp://send?phone=57' + this.cv.phone.replaceAll(' ', '');

    // Si ninguna app se abrió, copiamos el número para que no quede ningún error en pantalla
    setTimeout(() => {
      document.removeEventListener('visibilitychange', onHide);
      if (!opened) copyText(this.cv.phone, 'Número copiado: ' + this.cv.phone);
    }, 1800);
  }

  mail(e: Event) {
    e.preventDefault();
    copyMail(this.cv.email);
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.fading.set(true);
      setTimeout(() => {
        this.roleIndex.update((i) => (i + 1) % this.cv.roles.length);
        this.fading.set(false);
      }, 400);
    }, 2800);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
