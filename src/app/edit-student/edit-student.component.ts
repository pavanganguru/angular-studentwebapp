import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from '../api.response';
import { Student } from '../Student.model';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student;
  id:number;
  apiResponse:ApiResponse;
  constructor(private route:ActivatedRoute,private router:Router,private studentService:StudentService) { }

  ngOnInit(): void {
    this.student=new Student();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.studentService.getStudentById(this.id)
      .subscribe(data => {
        console.log(data);
        this.student = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.studentService.editStudent(this.id, this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    console.log(this.student);
    this.router.navigate(['/students']);
    }

  
  list(){
    this.router.navigate(['students']);
  }

}
