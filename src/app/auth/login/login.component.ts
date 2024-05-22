import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AuthService } from '../auth.service';
import { RegisterComponent } from '../register/register.component';
import { ToastrService } from 'ngx-toastr';
import { ShardModule } from '../../shared/shard.module';
import { RouterOutlet } from '@angular/router';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ShardModule, MatDialogModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  [x: string]: any;
  phone: number | undefined;
  password: string = '';

  private authService = inject(AuthService);
  private toaster = inject(ToastrService);

  //this is for signUp
  login(loginform: any): void {
    if (loginform.valid) {
      const data = loginform.value;
  
      console.log('the user is ', loginform);
      this.authService.signIn(data.phone, data.password).subscribe(() => {
        this.toaster.success('تم تسجيل الدخول');
        this.authService.router.navigateByUrl('admin',{ skipLocationChange: true });
      });
    } else {
      this.toaster.error('يجب أن تكون البيانات صحيحة');
    }
  }

  constructor(public dialog: MatDialog) { }

  //this is for register New student
  register() {
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
