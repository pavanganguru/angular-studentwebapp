import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'' ,redirectTo:"students",pathMatch:"full"},
  {path:"students",component:StudentListComponent},
  {path:"editstudent/:id" ,component:EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
