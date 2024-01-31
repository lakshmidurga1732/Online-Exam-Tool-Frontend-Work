import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User } from '../Models/user';
import { FormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HttpErrorResponse,
  HttpEventType,
} from '@angular/common/http';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css'
})
export class ImageUploadComponent {
  progress?: number;
  message?: string;
  item: User;
  constructor(private http: HttpClient) {
    this.item = new User();
  }
  uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    //set product image in localstorage
    localStorage.setItem('uploadImage',fileToUpload.name);
    // this.item.uploadImage = fileToUpload.name;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http
      .post('http://localhost:5010/api/User/UploadImage', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe({
        next: (event) => {
          if (
            event.type === HttpEventType.UploadProgress &&
            event.total != undefined
          )
            this.progress = Math.round((100 * event.loaded) / event.total);
          else if (event.type === HttpEventType.Response) {
            this.message = 'Upload success.';
          }
        },
        error: (err: HttpErrorResponse) => console.log(err),
      });
  };
}

