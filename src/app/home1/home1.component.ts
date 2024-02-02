import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home1',
  standalone: true,
  imports: [ CommonModule,HttpClientModule],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css'
})
export class Home1Component {
  constructor(private http: HttpClient, private router: Router, private activatedroute:ActivatedRoute) {
  }
  onRegister(): void {
    this.router.navigateByUrl('registeruser'); 
    console.log('Register button clicked');
  }
  onLogin(): void {
    this.router.navigateByUrl('login'); 
  }
}
