import { Component } from '@angular/core';
import { FormsModule, FormArray, FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-resume-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './resume-form.component.html',
  styleUrl: './resume-form.component.css'
})
export class ResumeFormComponent {

  isEndInformation: boolean = false;

  resumeForm = new FormGroup({
    personalinformation: new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(12)]),
      address: new FormControl('')
    }),

    socialmedia: new FormGroup({
      linkedin: new FormControl(''),
      github: new FormControl(''),
      moresocialmedia: new FormArray([])
    }),

    educations: new FormGroup({
      educationqoalification: new FormControl('', [Validators.required]),
      feildofstudy: new FormControl('', [Validators.required]),
      companyname: new FormControl(''),
      graduation: new FormControl(''),
      gpa: new FormControl(''),
    })
  });



  get email() {
    return this.resumeForm.get('personalinformation.email');
  }

  get fullname() {
    return this.resumeForm.get('personalinformation.fullName');
  }




  onsubmit() {
    console.log(this.resumeForm.value.personalinformation);
  }



}
