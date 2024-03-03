import { Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent  implements OnInit {
  projects: any[] = [];
  selectedProjectId!: string;
  p!: any;


  constructor(private projectService: ProjectServiceService, private R: Router,private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  loadScript(src: string) {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(this.document.body, script);
  }
  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => this.projects =data);
  
    this.loadScript('assets/js/select2.min.js');
    this.loadScript('assets/js/moment.min.js');
    this.loadScript('assets/js/bootstrap-datetimepicker.min.js');
    this.loadScript('assets/plugins/summernote/dist/summernote-bs4.min.js');
    this.loadScript('assets/js/app.js');
   
  }
  selectProjectForDeletion(projectId: string) {
    this.selectedProjectId = projectId;
  }
  


  deleteProject(id: string) {
    
    this.projectService.deleteProject(id).subscribe(()=>  this.ngOnInit() );
    // Après la suppression du projet
}
add(f: NgForm) {

  const maProjet: any = {
   
   "NomProject": f.value.NomProject,
   "StartDate": f.value.StartDate ,
   "FinishDate": f.value.FinishDate,
   "NomChefProjet": f.value.NomChefProjet,
   "description ": f.value.description ,
   "priority": f.value.priority ,
   "statut": f.value.statut,
 };

 this.projectService.createProject(maProjet).subscribe(() => {this.ngOnInit() ,
   alert('project ajoutée !');
 
 });

}

  // Add any other methods you need, such as editProject
}