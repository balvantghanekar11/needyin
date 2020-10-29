import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

    jobs:Job[];
  constructor(public jobService:JobsService) { }

  ngOnInit(): void {
    this.jobService.get_jobs().subscribe(jobs =>{
      this.jobs=jobs;
    });
  }

}
