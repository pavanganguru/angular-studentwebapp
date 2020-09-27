import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ApiResponse } from './api.response';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API_URL:"http://localhost:8080"

  constructor(private http:HttpClient) {
    
  } 
  private base_URL='http://localhost:8080/';
 

getstudents():Observable<ApiResponse>{
  return this.http.get<ApiResponse>(this.base_URL +'students');
  
}
deleteStudent(id:number){
  return this.http.get<ApiResponse>("http://localhost:8080/")
}

}
