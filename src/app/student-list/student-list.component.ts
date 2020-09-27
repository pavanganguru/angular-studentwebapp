import { Component, OnInit } from '@angular/core';

import { Observable,Subject } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  constructor(private studentService:StudentService) { }

  studentsArr:any[]=[];
  dtOptions:DataTables.Settings={}
  dtTrigger:Subject<any>=new Subject();
  students:Observable<Student[]>;
  student:Student=new Student();
  studentlist:any;
  ngOnInit(): void {
    this.dtOptions={
      pageLength:6,
      stateSave:true,
      lengthMenu:[[6,16,20,-1],[6,16,20,"ALL"]],
      processing:true
    };
    this.studentService.getall()
   .subscribe( data=>{this.students=data;
    this.dtTrigger.next();})
  }

}
