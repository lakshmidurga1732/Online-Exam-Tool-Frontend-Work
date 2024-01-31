import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home1',
  standalone: true,
  imports: [],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css'
})
export class Home1Component {
  constructor(private http: HttpClient, private router: Router, private activatedroute:ActivatedRoute) {
  }
}
