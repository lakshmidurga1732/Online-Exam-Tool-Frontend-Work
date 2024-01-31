import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../../Models/user';
import { ImageUploadComponent } from '../../../image-upload/image-upload.component';
import { HttpHeaders } from '@angular/common/http';
import * as emailjs from 'emailjs-com';
@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ImageUploadComponent],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  user: User;
  name: string = '';
  email: string = '';
  password: string = '';
  role: string[] = ['User'];
  siteID: number = 0;
  uploadImage:string|null=null;
  errMsg: string = '';
  httpResponse: any;
  selectedrole:string='';
  items = [
    { siteID: 1, siteName: 'EXAM PLATFORM' }, ];
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };
  
  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }
  onSiteIdChange(): void {
    console.log(this.siteID);
  }
  
  onSubmit(): void {
    
    let newUser = {
      userId: Math.floor(Math.random() * 100),
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.selectedrole,
      siteID: this.siteID,
      uploadImage: localStorage.getItem('uploadImage') || null,
    };
    
    if (newUser.uploadImage === null) {
      localStorage.removeItem('uploadImage');
    }
    console.log(newUser.uploadImage);
    this.http
      .post('http://localhost:5010/api/User/Register', newUser, this.httpOptions)
      .subscribe((response) => {
        this.httpResponse = response;
        console.log(this.httpResponse);
        this.router.navigateByUrl('');
       
      });
      this.sendEmail();
  }
  onReset(form: NgForm): void {
    form.reset();
  }
  sendEmail() {
    const templateParams = {
      to_name: this.name,
      from_name: 'Exam Platform',
      message:"Thankyou for registering",
      to_email: this.email
    };
    emailjs.init("rH6WL8vohj2lmT-Gz");
    emailjs.send('service_v2ruomi', 'template_wuw7y8o', templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
      }, (error) => {
        console.error('Error sending email:', error);
      });
  
  
  }

  


 
}

