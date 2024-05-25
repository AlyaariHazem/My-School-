import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { NavigateComponent } from './navigate/navigate.component';
import { AboutStudentComponent } from './students/about-student/about-student.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { AllStudentsComponent } from './students/all-students/all-students.component';

const routes: Routes = [
  {
    path: '',
    component: NavigateComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'sidebar', component: PageHeaderComponent },
      { path: 'all-students', component: AllStudentsComponent },
      { path: 'about-students', component: AboutStudentComponent },
      { path: 'add-student', component: AddStudentComponent },
      { path: 'edit-student', component: EditStudentComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
