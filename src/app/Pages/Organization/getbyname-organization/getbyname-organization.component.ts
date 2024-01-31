import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Organization } from '../../../Models/organization';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-getbyname-organization',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getbyname-organization.component.html',
  styleUrl: './getbyname-organization.component.css'
})
export class GetbynameOrganizationComponent {
  name?: string = '';
  organization: Organization;
  errMsg: string = '';
  isOrganizationExist: boolean = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.organization = new Organization();
  }

  search() {
    if (this.name) {
      this.http
        .get<Organization>(
          'http://localhost:5010/api/Organization/GetByName/' + this.name,this.httpOptions
        )
        .subscribe((response) => {
          this.handleSearchResponse(response);
        });
    } else {
      this.errMsg = 'Please provide a valid organization name.';
      this.isOrganizationExist = false;
    }
  }

  private handleSearchResponse(response: Organization) {
    console.log(response);
    if (response != null) {
      this.organization = response;
      this.isOrganizationExist = true;
      this.errMsg = '';
    } else {
      this.errMsg = 'Organization not found';
      this.isOrganizationExist = false;
    }
  }
}
