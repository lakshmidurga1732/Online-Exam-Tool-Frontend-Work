import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Site } from '../../../Models/site';
import { Router } from '@angular/router';


@Component({
  selector: 'app-getall-site',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './getall-site.component.html',
  styleUrl: './getall-site.component.css'
})
export class GetallSiteComponent {
  site:Site[]=[];
  siteID?:number;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http:HttpClient, private router: Router,){
    this.getAllSite();
  }
  getAllSite(){
    this.http.get<Site[]>('http://localhost:5010/api/Site/GetAll', this.httpOptions)
    .subscribe((response)=>{
      this.site = response;
      console.log(this.site);
    });
  }
  delete(site: Site) {
    const siteId = site.siteID;
    this.http.delete('http://localhost:5010/api/Site/Delete/' + siteId, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.getAllSite();
        this.router.navigate(['getallsite'], { skipLocationChange: true });
      });
    // this.router.navigateByUrl('getallsite');
  }
  edit(sid:any){
    this.router.navigateByUrl('getbyidsite/'+sid);
  }
}