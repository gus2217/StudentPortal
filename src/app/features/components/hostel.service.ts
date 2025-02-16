import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddHostelDto } from './dtos/addhostelrequest.model';
import { Observable } from 'rxjs';
import { HostelToDisplay } from './dtos/hosteltodisplay.model';
import { environment } from 'src/environments/environment.development';
import { UpdateHostelRequest } from './dtos/updatehostel.model';

@Injectable({
  providedIn: 'root'
})
export class HostelService {
  constructor(private http:HttpClient) { }
 
  addHostel(model:AddHostelDto):Observable<void>{
    return this.http.post<void>(`${environment.localApiUrl}/Hostel`,model)
  }
  
  getAllHostels():Observable<HostelToDisplay[]>{
    return this.http.get<HostelToDisplay[]>(`${environment.localApiUrl}/Hostel`)
    }
    
  getHostelById(id:string):Observable<HostelToDisplay>{
    return this.http.get<HostelToDisplay>(`${environment.localApiUrl}/Hostel/${id}`);
  }

  updateHostel(id:string,model:UpdateHostelRequest):Observable<HostelToDisplay>{
    return this.http.put<HostelToDisplay>(`${environment.localApiUrl}/Hostel/${id}`,model)
  }

  deleteHostel(id:string):Observable<HostelToDisplay>{
    return this.http.delete<HostelToDisplay>(`${environment.localApiUrl}/Hostel/${id}`)
  }

}
