import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Teststructure } from '../../../Models/teststructure';
import { Router,ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gettestbyid-teststructure',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './gettestbyid-teststructure.component.html',
  styleUrl: './gettestbyid-teststructure.component.css'
})
export class GettestbyidTeststructureComponent {
  testId?: number = 0;
  teststructure: Teststructure;
  errMsg: string = '';
  isTestExist: boolean = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };


  constructor(private http: HttpClient, private router: Router,private activatedroute:ActivatedRoute) {
    this.teststructure = new Teststructure();
    this.activatedroute.params.subscribe(p=>this.testId=p['sid']);
    this.search();
  }

  search() {
    this.http
      .get<Teststructure>('http://localhost:5010/api/TestStructure/GetById/'+this.testId, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.teststructure = response;
          this.isTestExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Test ID';
          this.isTestExist = false;
        }
      });
  }

  edit() {
    this.testId = this.teststructure.testID;
    this.http
      .put('http://localhost:5010/api/TestStructure/Update/'+this.testId, this.teststructure, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getalltests'], { skipLocationChange: true });  
      });
    // this.router.navigateByUrl('getalltests');
  }
}


