import { Component, OnInit } from '@angular/core';
import {Job, JobService} from '../job.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  newJob: Job = {
    id: 0,
    job_number: '',
    job_title: '',
    job_start_date: '',
    job_close_date: '',
    experience_required: false,
    number_of_openings: 0,
    job_notes: ''
  };

  constructor(private jobService: JobService, private router: Router, private route: ActivatedRoute) { }

  onSubmit(): void {
    this.jobService.createJob(this.newJob).subscribe(() => {
      this.newJob = {
        id: 0,
        job_number: '',
        job_title: '',
        job_start_date: '',
        job_close_date: '',
        experience_required: false,
        number_of_openings: 0,
        job_notes: ''
      };
    });

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const jobId = params.get('id');
      if (jobId) {
        const id = Number(jobId);
        this.jobService.getJobById(id).subscribe(job => {
          this.newJob = job;
        });
      }
    });
  }




}
