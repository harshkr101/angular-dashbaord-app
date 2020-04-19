import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'workshop-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent  {

  currentProject: Project;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value) {
    if(value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  };
}
