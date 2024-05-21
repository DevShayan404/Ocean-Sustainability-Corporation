import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
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
}
