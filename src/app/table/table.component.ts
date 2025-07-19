import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormBuilder, FormArray, Validators, FormGroup, FormsModule } from '@angular/forms';
import id from '@angular/common/locales/id';

interface User {
  firstName: string;
  lastName: string;
  Age: number;
  Job: string;
  id: any;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})



export class TableComponent {
  Users: User[] = [];
  isselected: boolean = false;
  selectedUsser: User | null | undefined;
  outSideClick: boolean = false;
  isEditBox: boolean = false;
  editedtext: User | null | undefined;
  opneditsction: boolean = false;

  newUser: User = {
    firstName: '',
    lastName: '',
    Age: 0,
    id: '',
    Job: ''
  }


  prodouct = [
    { name: 'ali', firstname: 'abbasiuol', id: '1' },
    { name: 'abass', firstname: 'abbasiug', id: '2' },
    { name: 'mohammad', firstname: 'abbasiue', id: '3' },
    { name: 'elias', firstname: 'abbasiue', id: '4' },
  ]


  addUsers() {
    const newuser: User = {
      firstName: this.newUser.firstName,
      lastName: this.newUser.lastName,
      Age: this.newUser.Age,
      id: Math.random(),
      Job: this.newUser.Job
    }


    this.Users.push(newuser);
    this.selectedUsser = null;
    this.isselected = false;
    this.isEditBox = false;

    console.log(this.newUser.id);
  }



  selectedUser(user: User) {
    this.selectedUsser = user;

    this.isEditBox = true;

    this.isselected = true;
  }


  rowOnClick() {
    const slectitem = document.querySelector('tr') as HTMLElement;

    slectitem.style.background = 'blue';
  }


  deleteUser(userId: any) {

    this.Users.splice(userId, 1);

    console.log(this.Users);
  }


  editUser(userInfo: User) {
    this.opneditsction = true;
    userInfo.firstName = 'ali'
    userInfo.lastName = 'abadi'
    userInfo.Age = 12
    userInfo.Job = 'progrramer'
  }


  projectForm = new FormGroup({
    porjectName: new FormControl('', [Validators.required]),
    projectDiscription: new FormControl(''),
    startDate: new FormControl('', [Validators.required]),
    teamMembers: new FormGroup({
      userNames: new FormArray([
        new FormControl('', [Validators.required]),
      ]),
      emails: new FormArray([
        new FormControl('', [Validators.email]),
      ]),
    }),
  });

  projectForm2 = new FormGroup({
    porjectName: new FormControl('', [Validators.required]),
    projectDiscription: new FormControl(''),
    startDate: new FormControl('', [Validators.required]),

    teamMembers: new FormGroup({
      userNames: new FormArray([
        new FormControl('', [Validators.required]),
      ]),
      emails: new FormArray([
        new FormControl('', [Validators.email]),
      ]),
    }),


  });


  get UserNames() {
    return this.projectForm.get('userNames') as unknown as FormArray;
  }

  addUserName() {
    this.UserNames.push(new FormControl('', [Validators.required]))
  }


  get Emails() {
    return this.projectForm.get('emails') as unknown as FormArray;
  }


  addEmail() {
    this.Emails.push(new FormControl('', [Validators.email]))
  }

  onProjectFormSubmit() {
    console.log('firstname is :', this.newUser.firstName);
  }



}




