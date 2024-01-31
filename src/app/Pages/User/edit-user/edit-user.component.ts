import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { User } from '../../../Models/user';
import { CommonModule } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent  {
  user:User;
  userId?:any;
  uploadImage:string|null=null;
  errMsg: string = '';
  isUserExist: boolean = false;
  isProfileUpdated = false;
  constructor(private router:Router,private activateRoute: ActivatedRoute,private http:HttpClient){
    this.user=new User();
    this.userId=localStorage.getItem('userId');
    console.log(this.userId);
    this.search();
  }
  search() {
    this.http
      .get<User>(
        'http://localhost:5010/api/User/GetUserById/'+this.userId
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.user = response;
          this.isUserExist = true;
          this.errMsg = '';
        } 
        
      });
  }
  edit() {
    this.http
      .put('http://localhost:5010/api/User/EditUser',this.user)
      .subscribe((response) => {
        console.log(response); 
        this.isProfileUpdated = true;
      });
    
  }
  
}