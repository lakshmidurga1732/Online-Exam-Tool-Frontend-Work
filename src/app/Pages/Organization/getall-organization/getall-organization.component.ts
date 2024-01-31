import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Organization } from '../../../Models/organization';
import { Router } from '@angular/router';


@Component({
  selector: 'app-getall-organization',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './getall-organization.component.html',
  styleUrl: './getall-organization.component.css'
})
export class GetallOrganizationComponent {
  organizations: Organization[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router,) {
    this.getAllOrganization();
  }

  getAllOrganization() {
    this.http.get<Organization[]>('http://localhost:5010/api/Organization/GetAll', this.httpOptions)
      .subscribe((response) => {
        this.organizations = response;
        console.log(this.organizations);
      });
  }
  delete(organization: Organization) {
    const organizationId = organization.id;
    this.http
      .delete('http://localhost:5010/api/Organization/Delete/' + organizationId, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getallorganization'], { skipLocationChange: true });
        this.getAllOrganization();
         
      });
    // this.router.navigateByUrl('getallorganization');
  }
  edit(oid:any){
    this.router.navigateByUrl('getbyidorganization/'+oid);
  }
}
