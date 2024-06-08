import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./components/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./components/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
  {
    path: 'solutions',
    loadChildren: () =>
      import('./components/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
