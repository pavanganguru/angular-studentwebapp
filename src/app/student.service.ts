import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ApiResponse } from './api.response';
import { Student } from './Student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 

  constructor(private http:HttpClient) {
    
  } 
  private API_URL='http://localhost:8080/';
 

getstudents():Observable<ApiResponse>{
  return this.http.get<ApiResponse>(this.API_URL +'students');
  
}
deleteStudent(id:number){
  return this.http.delete<ApiResponse>(this.API_URL+'student/'+id)
}
  editStudent(id:number,student:Student): Observable<ApiResponse>{
    return this.http.put<ApiResponse>(this.API_URL+'student/'+id,student)
    
  }

  getStudentById(id:number) : Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.API_URL+'student/'+id)
  }

}
