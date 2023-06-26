import { Component, OnInit } from '@angular/core';
import {Job, JobService} from '../job.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: Job | undefined;

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit() {
    // @ts-ignore
    const jobId = +this.route.snapshot.paramMap.get('id');
    this.getJobDetails(jobId);
  }

  getJobDetails(jobId: number) {
    this.jobService.getJobById(jobId).subscribe((job: Job) => {
      this.job = job;
      console.log(this.job);
    });
  }

}
