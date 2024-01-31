import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Assignedtest } from '../../../Models/assignedtest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-getassignedtestbyid',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './getassignedtestbyid.component.html',
  styleUrl: './getassignedtestbyid.component.css'
})
export class GetassignedtestbyidComponent {
  assignedId?: number = 0;
  assignedtest: Assignedtest;
  errMsg: string = '';
  isAssignedTestExist: boolean = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router,private activatedroute:ActivatedRoute) {
    this.assignedtest = new Assignedtest();
    this.activatedroute.params.subscribe(p=>this.assignedId=p['sid']);
    this.search();
  }

  search() {
    this.http
      .get<Assignedtest>('http://localhost:5010/api/AssignedTest/GetAssignedTest/' + this.assignedId, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.assignedtest = response;
          this.isAssignedTestExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Assignment ID';
          this.isAssignedTestExist = false;
        }
      });
  }

  edit() {
    this.assignedId = this.assignedtest.assignmentID;
    this.http
      .put('http://localhost:5010/api/AssignedTest/PutAssignedTest/'+this.assignedId,this.assignedtest,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getassignedtests'], { skipLocationChange: true });
      });
    // this.router.navigateByUrl('getassignedtests');
  }
}




