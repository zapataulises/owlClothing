import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwlContactComponent } from './owl-contact/owl-contact.component';
import { OwlShoesComponent } from './owl-shoes/owl-shoes.component';

const routes: Routes = [
  { path: '', redirectTo: 'shoes', pathMatch: 'full' },
  { path: 'shoes', component: OwlShoesComponent },
  { path: 'contact', component: OwlContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
