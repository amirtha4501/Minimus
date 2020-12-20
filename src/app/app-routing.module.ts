import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddCardComponent } from './ui/add-card/add-card.component';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  // {path: 'add', component: AddCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
