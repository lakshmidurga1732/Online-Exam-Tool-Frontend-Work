import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../Models/user';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [HttpClientModule,CommonModule, RouterOutlet,RouterLink],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  user:User;
  userId:any;
  constructor(private http:HttpClient,private router:Router){
      this.user=new User();
      this.userId=localStorage.getItem('userId');
      console.log(this.userId);
      this.http.get('http://localhost:5010/api/User/GetUserById/'+this.userId)
      .subscribe((response)=>{
        this.user=response;
        console.log(this.user);
      })
}
}