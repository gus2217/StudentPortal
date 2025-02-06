import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddHostelDto } from './dtos/addhostelrequest.model';
import { Observable } from 'rxjs';
import { HostelToDisplay } from './dtos/hosteltodisplay.model';
import { environment } from 'src/environments/environment.development';

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
}
