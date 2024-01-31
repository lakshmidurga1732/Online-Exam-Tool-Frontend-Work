import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Site } from '../../../Models/site';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-getbyname-site',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getbyname-site.component.html',
  styleUrl: './getbyname-site.component.css'
})
export class GetbynameSiteComponent {
  siteName?: string = '';
  site: Site;
  errMsg: string = '';
  isSiteExist: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.site = new Site();
  }

  search() {
    if (this.siteName) {
      this.http
        .get<Site>(
          'http://localhost:5010/api/Site/GetByName/' + this.siteName
        )
        .subscribe((response) => {
          this.handleSearchResponse(response);
        });
    } else {
      this.errMsg = 'Please provide a valid organization name.';
      this.isSiteExist = false;
    }
  }

  private handleSearchResponse(response: Site) {
    console.log(response);
    if (response != null) {
      this.site = response;
      this.isSiteExist = true;
      this.errMsg = '';
    } else {
      this.errMsg = 'Site not found';
      this.isSiteExist = false;
    }
  }

}



