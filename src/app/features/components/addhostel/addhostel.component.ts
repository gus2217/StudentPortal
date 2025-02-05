import { Component } from '@angular/core';
import { AddHostelDto } from '../dtos/addhostelrequest.model';
import { HostelService } from '../hostel.service';

@Component({
  selector: 'app-addhostel',
  templateUrl: './addhostel.component.html',
  styleUrls: ['./addhostel.component.scss']
})
export class AddhostelComponent {

  model:AddHostelDto;
 
  constructor( private hostelService:HostelService){
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
        console.log("this was successful");
      }
    }
   )
  }
 
}
