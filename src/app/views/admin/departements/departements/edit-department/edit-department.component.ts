import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartementService } from '../departement.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrl: './edit-department.component.css'
})
export class EditDepartmentComponent implements OnInit {
  myForm!: FormGroup;
  _id!: string;
  newDepartment: any = {}; // Vous devez initialiser l'objet newDepartment

  constructor(
    private DepartmentService: DepartementService,
    private router: Router,
    private formBuilder: FormBuilder,
    private actR: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      _id: [''],
      name: [''],
      budgetAllocated: [''],
      totalEmployees: [''],
      description: [''],
      vacantPositions: [''],
    });

    this._id = this.actR.snapshot.params['_id'];
    this.DepartmentService.getDepartmentById(this._id).subscribe((data) => {
      this.newDepartment = data;
      this.myForm.patchValue(this.newDepartment);
    });
  }

  updateD() {
    const updatedValues = this.myForm.value;

    this.DepartmentService.updateDepartment(this._id, updatedValues).subscribe(
      () => this.router.navigate(['/admin/departements']),
      (error) => console.error('Erreur lors de la mise à jour du departement :', error)
    );
  }
}
