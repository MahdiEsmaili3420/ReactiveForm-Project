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
  isModal: boolean = false;
  errrormessage: string = '';

  confrimMessage : string = ''

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

  get phone() {
    return this.resumeForm.get('personalinformation.phone')
  }




  onsubmit() {

    // if(this.phone?.valid){
    //   console.log('فرمت صحیح است')
    // }
    // else{
    //   console.log('فرمت صحیح نمیباشد !');
    // }

    if (this.resumeForm.invalid) {
      this.errrormessage = 'تمام موارد را کامل کنید !'
    }

    else{
      this.confrimMessage = 'اطلاعات با موفقیت ثبت شد'
    }

    console.log(this.resumeForm.valid);

  }

  openModal() {
    // if (this.resumeForm.valid) {
    this.isModal = true;
    // }

    // else {
    //   this.isModal = false;
    // }


  }



}
