import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from './entreprise.service';
import { Entreprise } from './entreprise';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { data } from 'jquery';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrl: './entreprise.component.css'
})
export class EntrepriseComponent implements OnInit {
  entreprises:Entreprise[]=[];
  newEntreprise: any= {};
  constructor(private modalService: NgbModal, 
    private EntrepriseService: EntrepriseService){}
  ngOnInit(): void {
      this.EntrepriseService.getEntreprises().subscribe(
        entreprises => {
          this.entreprises = entreprises;
        },);
  }
  addCompany(formData: NgForm) {
    // Assuming you have a method in your service to create a new entreprise.
    this.EntrepriseService.createEntreprise(formData.value).subscribe(
      (response: any) => {
        console.log('Entreprise ajoutée avec succès :', response);

        // Optionally, you can reset the form after successful submission.
        formData.resetForm();
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout de l\'entreprise :', error);
        // Handle errors here
      }
    );
  }

    
}
