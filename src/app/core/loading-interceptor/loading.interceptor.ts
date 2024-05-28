import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from '../services/loader-service/loader.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoaderService);
  loadingService.show();
  return next(req).pipe(finalize(() => loadingService.hide()));
};
