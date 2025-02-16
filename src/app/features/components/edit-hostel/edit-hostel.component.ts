import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostelService } from '../hostel.service';
import { HostelToDisplay } from '../dtos/hosteltodisplay.model';
import { UpdateHostelRequest } from '../dtos/updatehostel.model';

@Component({
  selector: 'app-edit-hostel',
  templateUrl: './edit-hostel.component.html',
  styleUrls: ['./edit-hostel.component.scss'],
})
export class EditHostelComponent implements OnInit {
  id: string | null = null;
  hostel: HostelToDisplay = {id:'', name: '', description: '' };
  constructor(
    private route: ActivatedRoute,
    private hostelService: HostelService,
    private router:Router
  ) {}

  ngOnInit(): void  {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          this.hostelService.getHostelById(this.id).subscribe({
            next: (response) => {
              this.hostel = response;
            },
          });
        }
      },
    });
  }

  onFormSubmit():void{
    const updateHostel:UpdateHostelRequest={
    name:this.hostel?.name,
    description:this.hostel?.description
    };
     if(this.id){
     this.hostelService.updateHostel(this.id,updateHostel).subscribe({
     next:(response)=>{
     this.router.navigateByUrl('/admin/hostels')
     }
     })
    //pass this to the api....
     }
  
    }
}
