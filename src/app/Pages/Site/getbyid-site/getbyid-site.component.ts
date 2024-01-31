import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Site } from '../../../Models/site';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-getbyid-site',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './getbyid-site.component.html',
  styleUrl: './getbyid-site.component.css'
})
export class GetbyidSiteComponent {
  siteId?: number = 0;
  site: Site;
  errMsg: string = '';
  isSiteExist: boolean = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router,private activatedroute:ActivatedRoute) {
    this.site = new Site();
    this.activatedroute.params.subscribe(p=>this.siteId=p['sid']);
    this.search();
  }

  search() {
    this.http
      .get<Site>('http://localhost:5010/api/Site/GetById/' + this.siteId, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.site = response;
          this.isSiteExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Site ID';
          this.isSiteExist = false;
        }
      });
  }

  edit() {
    this.siteId = this.site.siteID;
    this.http
      .put('http://localhost:5010/api/Site/Update/'+this.siteId, this.site,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getallsite'], { skipLocationChange: true });  
      });
    // this.router.navigateByUrl('getallsite');
  }
}

