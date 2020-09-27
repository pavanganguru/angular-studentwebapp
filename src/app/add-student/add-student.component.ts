import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../Student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student = new Student();
  submitted = false;

  constructor(private router: Router,private studentService:StudentService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.studentService.addStudent(this.student)
    .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
    this.router.navigate(['/students']);
  }

}
