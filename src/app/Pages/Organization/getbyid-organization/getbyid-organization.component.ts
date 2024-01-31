import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Organization } from '../../../Models/organization';
import { Router ,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-getbyid-organization',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getbyid-organization.component.html',
  styleUrl: './getbyid-organization.component.css'
})
export class GetbyidOrganizationComponent {
  organizationid?: number = 0;
  organization: Organization;
  errMsg: string = '';
  isOrganizationExist: boolean = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router,private activatedroute:ActivatedRoute) {
    this.organization = new Organization();
    this.activatedroute.params.subscribe(p=>this.organizationid=p['oid']);
    this.search();
  }
  search() {
    this.http
      .get<Organization>(
        'http://localhost:5010/api/Organization/GetById' + this.organizationid,this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.organization = response;
          this.isOrganizationExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid organization Id';
          this.isOrganizationExist = false;
        }
      });
  }
  edit() {
    this.organizationid = this.organization.id;
    this.http
  .put('http://localhost:5010/api/Organization/Update/'+this.organizationid, this.organization,this.httpOptions)
  .subscribe((response) => {
    console.log(response);
    this.router.navigate(['getallorganization'], { skipLocationChange: true });
    });
    // this.router.navigateByUrl('getallorganization');
  }
}
