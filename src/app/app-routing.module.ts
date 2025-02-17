import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostelComponent } from './features/components/hostel/hostel.component';
import { AddhostelComponent } from './features/components/addhostel/addhostel.component';
import { EditHostelComponent } from './features/components/edit-hostel/edit-hostel.component';

const routes: Routes = [
  {path:'admin/hostels',component:HostelComponent},
  {path:'admin/hostels/add',component:AddhostelComponent},
  {path:'admin/hostels/:id',component:EditHostelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
