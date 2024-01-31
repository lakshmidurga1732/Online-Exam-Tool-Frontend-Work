import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Assignedtest } from '../../../Models/assignedtest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getassignedtests',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './getassignedtests.component.html',
  styleUrl: './getassignedtests.component.css'
})
export class GetassignedtestsComponent {
  assignedtest:Assignedtest[]=[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http:HttpClient,private router: Router){
    this.getAssignedTest();
  }
  getAssignedTest(){
    this.http.get<Assignedtest[]>('http://localhost:5010/api/AssignedTest/GetAssignedTests', this.httpOptions)
    .subscribe((response)=>{
      this.assignedtest = response;
      console.log(this.assignedtest);
    });
  }
  delete(assignedtest: Assignedtest) {
    const testId = assignedtest.testID;
    this.http.delete('http://localhost:5010/api/AssignedTest/Delete/' + testId, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['getassignedtests'], { skipLocationChange: true });
        this.getAssignedTest();
      });
      // this.router.navigateByUrl('getassignedtests');
  }
  edit(sid:any) {
    this.router.navigateByUrl('getassignedtestbyid/'+sid);
  }
}



