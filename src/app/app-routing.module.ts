import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostelComponent } from './features/components/hostel/hostel.component';
import { AddhostelComponent } from './features/components/addhostel/addhostel.component';

const routes: Routes = [
  {path:'admin/hostels',component:HostelComponent},
  {path:'admin/hostels/add',component:AddhostelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
