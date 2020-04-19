import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';

const BASE_URL='http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


// private projects: Project[] = [
//   {
//     id: '1',
//     title: 'Project One',
//     details: 'This is a sample project',
//     percentComplete: 20,
//     approved: false,
//   },
//   {
//     id: '2',
//     title: 'Project Two',
//     details: 'This is a sample project',
//     percentComplete: 40,
//     approved: false,
//   },
//   {
//     id: '3',
//     title: 'Project Three',
//     details: 'This is a sample project',
//     percentComplete: 100,
//     approved: true,
//   }
// ];

  model='projects';
  constructor(private httpClient:HttpClient) { }

  all(){
    return this.httpClient.get(`${BASE_URL}${this.model}`);
  }
}