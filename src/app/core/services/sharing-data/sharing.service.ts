import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private isVisibleFooterSection = new BehaviorSubject<boolean>(true);
  private isVisibleNavHeader = new BehaviorSubject<boolean>(true);
  constructor() {}
  // footer ---------------------->
  showFooterSectionVisible(data: boolean) {
    this.isVisibleFooterSection.next(data);
  }
  getFooterSectionVisible(): Observable<boolean> {
    return this.isVisibleFooterSection.asObservable();
  }
  // navbar ---------------------->
  showNavHeader(data: boolean) {
    this.isVisibleNavHeader.next(data);
  }
  getNavHeader(): Observable<boolean> {
    return this.isVisibleNavHeader.asObservable();
  }
}
