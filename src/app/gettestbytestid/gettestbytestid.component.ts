import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Teststructure } from '../Models/teststructure';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Assignedtest } from '../Models/assignedtest';
import { Subject } from '../Models/subject';
@Component({
  selector: 'app-gettestbytestid',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './gettestbytestid.component.html',
  styleUrl: './gettestbytestid.component.css'
})
export class GettestbytestidComponent {
  testId?: number = 0;
  testStructure: Teststructure;
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router:Router, private activatedroute:ActivatedRoute) {
    this.testStructure = new Teststructure();
    
    this.activatedroute.params.subscribe(p=>this.testId=p['testID']);
    this.takeTest();

  }

  

  takeTest() {
    
    this.http.get<Teststructure>('http://localhost:5010/api/TestStructure/GetById/' + this.testId, this.httpOptions).subscribe(
      (data: Teststructure) => {
        this.testStructure = data;
      },
      error => console.error('Error fetching test structure', error)
    );
  }
  
    

  starttest(subjectID: any): void {
      
    this.router.navigate(['getquestionsbysubid/',+subjectID]);
  }
}

    




