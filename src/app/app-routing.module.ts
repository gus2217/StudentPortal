import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostelComponent } from './features/components/hostel/hostel.component';

const routes: Routes = [
  {path:'admin/hostels',component:HostelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
