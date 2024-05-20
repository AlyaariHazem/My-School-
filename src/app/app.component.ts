import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoginComponent } from "./auth/login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, DashboardComponent, LoginComponent]
})
export class AppComponent {
  title = 'MySchool';
}
