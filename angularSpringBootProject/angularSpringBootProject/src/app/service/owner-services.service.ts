import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerServicesService {

 baseUrl:string="http://localhost:8088/api/owner";


  constructor(private http: HttpClient) { }


  ownerGet(){
    return this.http.get<any>(this.baseUrl)
    .pipe(map(res=>{
      return res;
    }))
  }

  owmerPost(data:any){
    return this.http.post<any>(this.baseUrl, data)
    .pipe(map(res=>{
      return res;
    }))
  }


  ownerDelete(id:number){
    return this.http.delete<any>(this.baseUrl+ id)
    .pipe(map(res=>{
      return res;
    }))
  }

ownerEdit(id:number, row:any){
    return this.http.put<any>(this.baseUrl+id, row)
    .pipe(map(res=>{
      return res;
    }))
  }

}
