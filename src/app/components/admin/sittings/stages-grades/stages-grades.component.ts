import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stages } from '../../../../core/models/stages-grades.modul';
import { StageService } from '../../../../core/services/stage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stages-grades',
  templateUrl: './stages-grades.component.html',
  styleUrl: './stages-grades.component.scss'
})
export class StagesGradesComponent implements AfterViewInit {
  activeTab: string = '';

  ngAfterViewInit(): void {
    // Called after the view has been initialized
    const defaultOpen = document.getElementById("defaultOpen");
    if (defaultOpen) {
      defaultOpen.click();
    }
  }

  openPage(pageName: string, elmnt: EventTarget | null): void {
    let i: number;
    let tabcontent: HTMLCollectionOf<HTMLElement>;
    let tablinks: HTMLCollectionOf<HTMLElement>;

    tabcontent = document.getElementsByClassName("tabcontent") as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink") as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active'); // Remove active class from all buttons
    }

    document.getElementById(pageName)!.style.display = "block";
    if (elmnt instanceof HTMLElement) {
      elmnt.classList.add('active'); // Add active class to the clicked button
    }

    // Set the active tab
    this.activeTab = pageName;
  }
  //this for manage the stages
  form: FormGroup;
  stages:Stages[]=[];
  constructor(
    private stageService: StageService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group({
      id: '',
      stage: ['', Validators.required],
      note: '',
      state: true
    });
  }

  ngOnInit() {
    this.getStages();
  }

  getStages() {
    this.stageService.getStages().subscribe(stages => {
      this.stages = stages;
    });
  }

  addStage() {
    if (this.form.valid) {
      this.stageService.addStage(this.form.value).subscribe(() => {
        this.getStages(); // Refresh the list of stages
        this.form.reset();
        this.toastr.success('تم إضافة المرحلة بنجاح');
      });
    } else {
      this.toastr.error('يجب أن تدخل بيانات');
    }
  }

  editStage(stage: Stages) {
    this.form.patchValue(stage);
    this.stageService.editStage(stage).subscribe(() => {
      this.toastr.success('Stage updated successfully');
      this.getStages(); // Refresh the list of stages
    });
  }

  deleteStage(stageId: string) {
    this.stageService.deleteStage(stageId).subscribe(() => {
      this.toastr.success('Stage deleted successfully');
      this.getStages(); // Refresh the list of stages
    });
  }
}
