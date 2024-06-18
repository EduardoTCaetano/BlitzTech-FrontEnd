import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrl: './advertising.component.css'
})
export class AdvertisingComponent {
  @ViewChild('carouselInner') carouselInner!: ElementRef;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 4000); // Altera o slide a cada 3 segundos (3000 milissegundos)
  }

  nextSlide() {
    const carouselInner = this.carouselInner.nativeElement as HTMLElement;
    const activeItem = carouselInner.querySelector('.carousel-item.active');
    if (activeItem) {
      activeItem.classList.remove('active');
      const nextItem = activeItem.nextElementSibling || carouselInner.firstElementChild;
      if (nextItem) {
        nextItem.classList.add('active');
      }
    }
  }

}



