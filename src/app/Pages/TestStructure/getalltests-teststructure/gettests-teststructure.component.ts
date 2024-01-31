import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Teststructure } from '../../../Models/teststructure';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gettests-teststructure',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './gettests-teststructure.component.html',
  styleUrl: './gettests-teststructure.component.css'
})
export class GettestsTeststructureComponent {
  test:Teststructure[]=[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http:HttpClient, private router: Router,){
    this.getAllTests();
  }
  getAllTests(){
    this.http.get<Teststructure[]>('http://localhost:5010/api/TestStructure/GetAll')
    .subscribe((response)=>{
      this.test = response;
      console.log(this.test);
    });
  }
  delete(test: Teststructure) {
    const testId = test.testID;
    this.http.delete('http://localhost:5010/api/TestStructure/Delete/' + testId, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.getAllTests();
        this.router.navigate(['gettests-teststructure'], { skipLocationChange: true });
      });
      // this.router.navigateByUrl('getalltests');
  }
  edit(sid:any) {
    this.router.navigateByUrl('gettestbyid/'+sid);
  }
}



