import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  startYear: number = 1999;
  yearsOfWork!: number;
  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.yearsOfWork = currentYear - this.startYear;
    console.log(this.yearsOfWork);
  }
}
