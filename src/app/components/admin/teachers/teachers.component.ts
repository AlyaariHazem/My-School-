import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements AfterViewInit {
  activeTab: string = '';

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  }

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
}
