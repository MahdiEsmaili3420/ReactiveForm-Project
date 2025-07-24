import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "./table/table.component";
import { ResumeFormComponent } from "./resume-form/resume-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, ResumeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simpletable';
}
