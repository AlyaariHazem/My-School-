import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { PageHeaderComponent } from "../page-header/page-header.component";
import { ShardModule } from '../shard/shard.module';
import { ChartForStudentComponent } from "../students/chart-for-student/chart-for-student.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [HeaderComponent, SidebarComponent, PageHeaderComponent, ShardModule, ChartForStudentComponent]
})
export class DashboardComponent {

}
