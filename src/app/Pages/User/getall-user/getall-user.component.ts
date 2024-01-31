import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Subject } from '../../../Models/subject';
import { User } from '../../../Models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-getall-user',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './getall-user.component.html',
  styleUrl: './getall-user.component.css'
})
export class GetallUserComponent {
  user:User[]=[];
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http:HttpClient,private router: Router){
    this.getAllUser();
  }
  getAllUser(){
    this.http.get<User[]>('http://localhost:5010/api/User/GetAllUsers',this.httpOptions)
    .subscribe((response)=>{
      this.user = response;
      console.log(this.user);
    });
  }
  
  




}


