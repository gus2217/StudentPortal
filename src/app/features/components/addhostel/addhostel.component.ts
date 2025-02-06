import { Component } from '@angular/core';
import { AddHostelDto } from '../dtos/addhostelrequest.model';
import { HostelService } from '../hostel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhostel',
  templateUrl: './addhostel.component.html',
  styleUrls: ['./addhostel.component.scss']
})
export class AddhostelComponent {

  model:AddHostelDto;
 
  constructor( private hostelService:HostelService,private router:Router){
   this.model={
    name:'',
    description:''
   };
 
  }
  onFormSubmit(){
   
   this.hostelService.addHostel(this.model)
   .subscribe(
    {
      next:(response)=>{
        this.router.navigateByUrl('/admin/hostels')
      }
    }
   )
  }
 
}
