import { Component } from '@angular/core';
import { HostelToDisplay } from '../dtos/hosteltodisplay.model';
import { HostelService } from '../hostel.service';

@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrls: ['./hostel.component.scss']
})
export class HostelComponent {
  hostels!:HostelToDisplay[]

  constructor(private hostelService:HostelService){

  }

  ngOnInit(): void {
    this.hostelService.getAllHostels()
    .subscribe({
      next:(response)=>{
 this.hostels=response
      }
    })
  }

}
