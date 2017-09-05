import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JOBS } from './jobs';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

	jobIndex: number;
	job;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.forEach(
            param => {
                this.job = JOBS.find( job => { //find the element in the JOBS array...
                    return job.id === parseInt(param.id) //... that has a matching id
                });
            }
        );
    }

}
