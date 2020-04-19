import { Component, OnInit } from '@angular/core';
import {ProjectsService,Project} from '@workshop/core-data';

@Component({
  selector: 'workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  projects:Project[];
  selectedProject:Project;

  constructor(private projectsService:ProjectsService) { }

  ngOnInit() {
    this.getProjects();

  }

  selectProject(project){
    this.selectedProject=project;
  }

  getProjects(){
    this.projectsService.all().subscribe((result:any)=>this.projects=result);
  }

  cancel(){
    this.selectedProject=null;
  }


}
