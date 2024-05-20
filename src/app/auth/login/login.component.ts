import { Component, inject } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { ShardModule } from '../../components/admin/shard/shard.module';
import { AuthService } from '../auth.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ShardModule,MatDialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  [x: string]: any;
  phone: number | undefined;
  password: string = '';
  private authService = inject(AuthService);
  login(loginform: any): void {
    if (loginform.valid) {
      const data = loginform.value;
      this.authService.signIn(data.phone, data.password).subscribe(res => {
      this.authService.router.navigateByUrl('users');
        console.log('res', res);
      });
    } else {
      console.log('there is an error ');
    }

  }

  onPasswordChanged(pass: string): void {
    console.log('password', pass);
  }

  onEmailChanged(phone: string): void {
    console.log('password', phone);
  }
  register(){
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  constructor(public dialog: MatDialog) {}
}
