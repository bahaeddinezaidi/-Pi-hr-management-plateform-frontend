import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entrprise-details',
  templateUrl: './entrprise-details.component.html',
  styleUrl: './entrprise-details.component.css'
})
export class EntrpriseDetailsComponent implements OnInit {
  myForm!: FormGroup;
  nom!: string;
  newEntreprise: any = {}; // Vous devez initialiser l'objet newDepartment

  constructor(
    private EntrepriseService: EntrepriseService,
    private router: Router,
    private formBuilder: FormBuilder,
    private actR: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.myForm = this.formBuilder.group({
    //   NomEntreprise:[''],
    //   secteurEntreprise:[''],
    //   numeroTelephone:[''],
    //   adresse:[''],
    //   typeEntreprise:[''],
    //   email:[''],
    //   codePostal:[''],
    //   CEO:[''],
    //   NumeroRegistreCommercial:[''],


     
    // });

    this.nom = this.actR.snapshot.params['nom'];
    this.EntrepriseService.getEntrepriseByNom(this.nom).subscribe((data) => {
      this.newEntreprise = data;
      
    });
  }

}
