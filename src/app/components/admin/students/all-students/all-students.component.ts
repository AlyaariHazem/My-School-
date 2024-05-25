import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { Students } from '../../../../core/models/students.model';
import { StudentsServicesService } from '../../../../core/services/student.service';
import { EditStudentComponent } from '../edit-student/edit-student.component';

export interface DialogData {
  student: Students;
}
@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.scss'
})
export class AllStudentsComponent implements OnInit {

  manageStudents=inject(StudentsServicesService);
  toastr=inject(ToastrService);

  students:Array<Students>=[];

  
    constructor(public dialog: MatDialog) {}
  
    openDialog(): void {
      const dialogRef = this.dialog.open(EditStudentComponent, {
        data: {student:this.students},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.students = result;
        this.refreshStudent();
      });
    }
  
  
  ngOnInit(): void {
    this.refreshStudent();
  }
  // this is for refersh after you delete 
  refreshStudent(): void {
    this.manageStudents.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  deleteStudent(student: Students): void {
    this.manageStudents.deleteStudent(student.id).subscribe(() => {
      this.toastr.success('Student deleted successfully');
      this.refreshStudent();
    });
  }
  
}
