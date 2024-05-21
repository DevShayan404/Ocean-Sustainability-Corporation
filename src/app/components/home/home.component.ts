import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HomeComponent {
  solutionList = [
    {
      id: 1,
      src: 'assets/images/service1.jpg',
      name: 'Demineralization & Condenstae Recovery',
    },
    {
      id: 2,
      src: 'assets/images/service2.jpg',
      name: 'Demineralization by EDR',
    },
    {
      id: 3,
      src: 'assets/images/service3.jpg',
      name: 'Desalination Plants',
    },
    {
      id: 4,
      src: 'assets/images/service4.jpg',
      name: 'Effluent Treatment Plants',
    },
    {
      id: 5,
      src: 'assets/images/service5.jpg',
      name: 'Heat Recovery Solutions (WHRU / Economizers)',
    },
    {
      id: 6,
      src: 'assets/images/service6.jpg',
      name: 'Heavy Duty Fans / Blowers and Compressors',
    },
  ];
  vendorsList = [
    {
      src: 'assets/logos/1.png',
    },
    {
      src: 'assets/logos/2.png',
    },
    {
      src: 'assets/logos/3.png',
    },
    {
      src: 'assets/logos/4.png',
    },
    {
      src: 'assets/logos/5.webp',
    },
    {
      src: 'assets/logos/6.svg',
    },
    {
      src: 'assets/logos/7.svg',
    },
    {
      src: 'assets/logos/8.png',
    },
    {
      src: 'assets/logos/9.svg',
    },
    {
      src: 'assets/logos/10.png',
    },
    {
      src: 'assets/logos/11.jfif',
    },
    {
      src: 'assets/logos/12.svg',
    },
    {
      src: 'assets/logos/13.png',
    },
    {
      src: 'assets/logos/14.svg',
    },
    {
      src: 'assets/logos/15.png',
    },
    {
      src: 'assets/logos/16.png',
    },
  ];

  startYear: number = 1999;
  yearsOfWork!: number;
  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.yearsOfWork = currentYear - this.startYear;
    console.log(this.yearsOfWork);
  }
}
