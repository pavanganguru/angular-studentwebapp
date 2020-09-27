import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API_URL:"http://localhost:8080"

  constructor(private http:HttpClient) {
    
  } 

getall(){
  return this.http.get("http://localhost:8080/students",{ responseType: 'text' as 'json' });
}

}
