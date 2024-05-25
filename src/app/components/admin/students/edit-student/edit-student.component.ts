import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../all-students/all-students.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StudentsServicesService } from '../../../../core/services/student.service';
import { UploadImageService } from '../../../../core/services/upload-image.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss'
})
export class EditStudentComponent {
  form: FormGroup;
  
  private toastService = inject(ToastrService);
  private studentService=inject(StudentsServicesService);
  private uplaodImae=inject(UploadImageService);
  
    constructor( private formBuilder: FormBuilder ,
      public dialogRef: MatDialogRef<EditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ){

      this.form = this.formBuilder.group({
        PlacePD: ['', Validators.required],
        ContryNum: ['', Validators.required],
        PirthDate: '',
        LnameE: ["", [Validators.required]],
        TnameE: ["", [Validators.required]],
        SnameE: ["", [Validators.required]],
        fnameE: ["", [Validators.required]],
        Lname: ["", [Validators.required]],
        Tname: ["", [Validators.required]],
        Sname: ["", [Validators.required]],
        fname: ["", [Validators.required]],
        six: "male",
        city: "",
        section: "",
        phone: ["", [Validators.minLength(9)]],
        country: "ye",
        lSchool: "",
        class: "",
        discriptionJob: "",
        typeJob: "",
        parantJob: "",
        parantType: "father",
        parantEmail: "",
        parantPhone: ['', [Validators.required, Validators.minLength(8)]],
        ParantName: '',
        ParnatContryNum: "",
        image: "",
      });
    }
  // this is for edit dilaog 
  closeEdit(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    if (this.form.valid) {
      this.form.patchValue(this.data.student);
      const imageFile = this.form.get('image')?.value;
      this.uplaodImae.uploadImage(imageFile).subscribe(()=>{
        this.studentService.addStudent(this.form.value).subscribe(()=>{
          console.log('you sent the form',this.form.value);
          this.toastService.success('تم إضافة الطالب بنجاح');
        });
      })
      
    } else {
      this.form.markAllAsTouched();      
      this.toastService.error('ادخل بيانات الطالب بالكامل');
    }
  }
  validateImageFile(event: any) {
    const file = event.target.files[0];
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
  
      if (!allowedExtensions.includes(fileExtension)) {
        this.toastService.error('(JPG, JPEG, PNG or GIF) يجب أن يكون أمتداد الصورة ');
        // Reset the file input
        event.target.value = '';
      }
    }
  }
}
