import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from '../../../Models/subject';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addsubject',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './addsubject.component.html',
  styleUrl: './addsubject.component.css'
})
export class AddsubjectComponent {
  subject: Subject;
  selectedSite: { siteID: number, siteName: string } = { siteID:1, siteName: '' };
  items = [
    { siteID:1, siteName: 'EXAM PLATFORM' },
    // Add more items as needed
  ];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.subject = new Subject();
  }

  onSiteIdChange(): void {
    this.selectedSite = this.items.find(item => item.siteID === this.selectedSite.siteID) || { siteID: 0, siteName: '' };
  }

  addSubject() {
    this.subject.siteID = this.selectedSite.siteID;
    console.log(this.subject);
    this.http
      .post('http://localhost:5010/api/Subject/Add', this.subject, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getallsubject'], { skipLocationChange: true });
      });
  }
}