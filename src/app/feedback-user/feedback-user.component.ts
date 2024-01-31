import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-user',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './feedback-user.component.html',
  styleUrl: './feedback-user.component.css'
})
export class FeedbackUserComponent {
  starRating: number = 0;
  submitted: boolean = false;

  submitFeedback() {
    this.submitted = true;
  }
}

