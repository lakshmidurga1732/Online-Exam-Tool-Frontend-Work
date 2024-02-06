import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Site } from '../../../Models/site';
import { Organization } from '../../../Models/organization';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsite',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './addsite.component.html',
  styleUrls: ['./addsite.component.css']
})
export class AddsiteComponent {
  site: Site;
  orgNames: Organization[] = []; // Array to store organization names
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.site = new Site();
    }
    ngOnInit() {
      this.getAllOrganization();
    }

  getAllOrganization(event?: any) {
    this.http.get<Organization[]>('http://localhost:5010/api/Organization/GetAll', this.httpOptions)
      .subscribe((response) => {
        this.orgNames = response;
        console.log('orgNames:', this.orgNames);
      });
  }

  addSite() {
    console.log('site:', this.site);
    console.log('orgNames:', this.orgNames);
    const selectedOrg = this.orgNames.find(org => org.orgID === this.site.orgID);
    
    console.log('selectedOrg:', selectedOrg);

    if (!selectedOrg) {
      console.error('Selected organization not found');
      return;
    }

    console.log('selectedOrg:', selectedOrg);

    this.site.orgName = selectedOrg.orgName;

    this.http.post('http://localhost:5010/api/Site/Add', this.site, this.httpOptions)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['getallsite'], { skipLocationChange: true });
        },
        (error) => {
          console.error('Error adding site:', error);
          // Handle errors as needed
        }
      );
  }
}