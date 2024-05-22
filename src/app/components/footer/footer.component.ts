import { ChangeDetectorRef, Component } from '@angular/core';
import { SharingService } from '../../core/services/sharing-data/sharing.service';

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
      name: 'Demineralization & Condensation Recovery',
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

  footerSectionHide!: boolean;
  constructor(
    private sharingService: SharingService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.sharingService.getFooterSectionVisible().subscribe({
      next: (data) => {
        this.footerSectionHide = data;
        this.cdr.detectChanges();
      },
    });
  }
}
