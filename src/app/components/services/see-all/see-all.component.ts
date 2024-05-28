import { Component } from '@angular/core';
import { SharingService } from '../../../core/services/sharing-data/sharing.service';
import { Router } from '@angular/router';
import { LoaderService } from '../../../core/services/loader-service/loader.service';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrl: './see-all.component.css',
})
export class SeeAllComponent {
  solutionList!: any[];
  constructor(
    private sharingService: SharingService,
    private router: Router,
    private loadingService: LoaderService
  ) {}
  ngOnInit() {
    this.sharingService.showNavHeader(false);
    this.sharingService.getSolutionData().subscribe({
      next: (data) => {
        this.solutionList = data;
      },
    });
  }

  routeToServiceDetail(data: any) {
    this.router.navigate(['solutions/detail'], {
      queryParams: {
        id: data?.id,
        name: data?.name,
      },
    });
  }

  ngOnDestroy(): void {
    this.sharingService.showNavHeader(true);
  }
}
