import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Job {
  id: number;
  job_number: string;
  job_title: string;
  job_start_date: string;
  job_close_date: string;
  experience_required: boolean;
  number_of_openings: number;
  job_notes: string;
}
@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:3000/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJobById(id: number): Observable<Job> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Job>(url);
  }

  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job);
  }

  updateJob(id: number, job: Job): Observable<Job> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Job>(url, job);
  }

  deleteJob(jobId: number): Observable<void> {
    const url = `${this.apiUrl}/${jobId}`;
    return this.http.delete<void>(url);
  }
}
