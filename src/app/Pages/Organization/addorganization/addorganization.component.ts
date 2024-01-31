import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organization } from '../../../Models/organization';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addorganization',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './addorganization.component.html',
  styleUrl: './addorganization.component.css'
})
export class AddorganizationComponent {
  organization: Organization;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.organization = new Organization();
  }

  addOrganization() {
    console.log(this.organization);
    this.http
      .post('http://localhost:5010/api/Organization/Add', this.organization,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getallorganization'], { skipLocationChange: true });
      });
    // this.router.navigateByUrl('getallorganization');
  }
}