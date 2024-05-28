import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../core/services/loader-service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent {
  isLoading: Observable<boolean>;

  constructor(private loadingService: LoaderService) {
    this.isLoading = this.loadingService.isLoading;
  }
}
