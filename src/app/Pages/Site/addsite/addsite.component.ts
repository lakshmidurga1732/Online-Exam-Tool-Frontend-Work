import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Site } from '../../../Models/site';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsite',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './addsite.component.html',
  styleUrl: './addsite.component.css'
})
export class AddsiteComponent {
  site: Site;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.site = new Site();
  }

  addSite() {
    console.log(this.site);
    this.http
      .post('http://localhost:5010/api/Site/Add', this.site,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getallsite'], { skipLocationChange: true });
      });
    // this.router.navigateByUrl('getallsite');
  }
}





