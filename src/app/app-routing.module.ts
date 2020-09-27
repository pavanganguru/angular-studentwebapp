import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'' ,redirectTo:"students",pathMatch:"full"},
  {path:"students",component:StudentListComponent},
  {path:"editstudent/:id" ,component:EditStudentComponent},
  {path:"addstudent",component:AddStudentComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
