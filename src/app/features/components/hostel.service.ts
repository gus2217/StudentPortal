import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddHostelDto } from './dtos/addhostelrequest.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostelService {
  constructor(private http:HttpClient) { }
 
  addHostel(model:AddHostelDto):Observable<void>{
    return this.http.post<void>("https://localhost:7128/api/Hostel",model)
  }
}
