import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Teststructure } from '../../../Models/teststructure';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addtest',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './addtest.component.html',
  styleUrl: './addtest.component.css'
})
export class AddtestComponent {
  test: Teststructure;
  selectedSite: { siteID: number, siteName: string } = { siteID: 1, siteName: '' };
  items = [
    { siteID: 1, siteName: 'EXAM PLATFORM' },
    // Add more items as needed
  ];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.test = new Teststructure();
  }

  onSiteIdChange(): void {
    this.selectedSite = this.items.find(item => item.siteID === this.test.siteID) || { siteID: 0, siteName: '' };
  }

  addTestStructure() {
    this.test.siteID = this.selectedSite.siteID;
    console.log(this.test);
    this.http
      .post('http://localhost:5010/api/TestStructure/Add', this.test, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getalltests'], { skipLocationChange: true });
      });
  }
}