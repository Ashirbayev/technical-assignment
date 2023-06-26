import { Component, OnInit } from '@angular/core';
import {JobService} from '../job.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})

export class JobListComponent implements OnInit {
  jobs: any[] = [];

  constructor(private jobService: JobService,
              private router: Router) { }


  ngOnInit(): void {
    this.jobService.getJobs().subscribe(
      (jobs) => {
        this.jobs = jobs;
      },
      (error) => {
        console.error('Error retrieving jobs:', error);
      }
    );
  }



  navigateToJobDetails(jobId: number) {
    this.router.navigate(['/jobs', jobId]);
  }

  navigateToAddJob() {
    this.router.navigate(['/new']);
  }

  navigateToJob(jobId: number) {
    this.router.navigate(['/new', jobId]);
  }

}
