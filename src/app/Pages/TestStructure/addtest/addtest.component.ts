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
  
  
  
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};

  constructor(private http: HttpClient, private router: Router) {
    this.test = new Teststructure();
  }
  
  
  addTestStructure() {
    console.log(this.test);
    this.http
      .post('http://localhost:5010/api/TestStructure/Add', this.test,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getalltests'], { skipLocationChange: true });
      });
    // this.router.navigateByUrl('getalltests');
  }
}



