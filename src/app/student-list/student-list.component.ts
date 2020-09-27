import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable,Subject } from 'rxjs';
import { ApiResponse } from '../api.response';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  constructor(private studentService:StudentService,private router:Router) { }

  students:Observable<ApiResponse>;
  ngOnInit(): void {

    this.students=this.studentService.getstudents();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
  }
  deleteStudent(id:number){
    this.studentService.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.students = this.studentService.getstudents();
        },
        error => console.log(error));

  }

}
