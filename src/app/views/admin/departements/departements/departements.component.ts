import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartementService } from './departement.service';
import { NgForm } from '@angular/forms';
import { Department } from '../departement.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrl: './departements.component.css'
})
export class DepartementsComponent implements OnInit {

  departments: any[] = [];
  newDepartment: any = {};
  addDepartmentModal!: NgbModalRef;
  department!: Department ;
  selectedDepartment: any;
 
   
  constructor(private modalService: NgbModal, 
              private departementService: DepartementService,
              private route: ActivatedRoute,
              private router: Router,
              private actR: ActivatedRoute) {}
  ngOnInit(): void {
    this.getAllDepartments();
   
  }

  // Add method to handle adding a new department
  addDepartment() {
    // Use the DepartementService to create a new department
    this.departementService.createDepartment(this.newDepartment)
      .subscribe((createdDepartment: Department) => {
        // On successful response, push the new department to the 'departments' array
        this.departments.push(createdDepartment);
        
        // Optionally, you can clear the form fields after adding the department
        this.newDepartment = {};
        
        // Close the modal using NgbModalService
        if (this.addDepartmentModal) {
          this.addDepartmentModal.close();
        }
      }, error => {
        // Handle errors here
        console.error('Error creating department:', error);
      });
  }

  // Open the add department modal
  openAddDepartmentModal(content: any) {
    this.addDepartmentModal = this.modalService.open(content, { centered: true });
  }
  // openEditDepartmentModal(content: any, department: any): void {
  //   // Assuming you have a property named selectedDepartment in your class
  //   this.selectedDepartment = { ...department }; // create a copy of the department to avoid modifying the original
  //   this.editDepartmentModal= this.modalService.open(content, { centered: true, size: 'lg' });
  // }
  
  getAllDepartments() {
    this.departementService.getAllDepartments()
      .subscribe((departments: Department[]) => {
        this.departments = departments;
      }, error => {
        console.error('Error fetching departments:', error);
      });


    }
    deleteDepartement(id: string) {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: "Vous ne pourrez pas revenir en arrière!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimez-le!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.departementService.deleteDepartment(id).subscribe(() => {
            Swal.fire(
              'Supprimé!',
              'Votre projet a été supprimé.',
              'success'
            );
            this.ngOnInit(); // Ou une autre méthode pour actualiser la liste des projets
          }, (error) => {
            // Gérer l'erreur ici, par exemple :
            Swal.fire(
              'Erreur!',
              'La suppression du projet a échoué.',
              'error'
            );
          });
        }
      });}
    

    // updateDepartment(): void {
    //   this.departementService.updateDepartment(this.selectedDepartment.departmentId, this.selectedDepartment)
    //     .subscribe(
    //       (response) => {
    //         console.log('Department updated successfully', response);
    //         // Optionally, you can update the local departments array if needed
    //         const index = this.departments.findIndex(d => d.departmentId === this.selectedDepartment.departmentId);
    //         if (index !== -1) {
    //           this.departments[index] = { ...this.selectedDepartment };
    //         }
    //         this.modalService.dismissAll(); // Close the modal after the update
    //       },
    //       (error) => {
    //         console.error('Error updating department', error);
    //       }
    //     );
    // }
     
  
  

//     updateDepartment(updateDepartmentDto: any): void {
//       const id = this.route.snapshot.paramMap.get('id'); // Obtenez l'ID du département depuis l'URL
//       this.departementService.updateDepartment(id, updateDepartmentDto)
//           .subscribe(
//               response => {
//                   console.log('Department updated successfully:', response);
//                   // Gérez la mise à jour réussie comme vous le souhaitez
//               },
//               error => {
//                   console.error('Error updating department:', error);
//                   // Gérez l'erreur comme vous le souhaitez
//               }
//           );
//   }


// dismissModal() {
//   if (this.editModal) {
//       this.editModal.dismiss('Cross click');
//   }
// }
// openUpdateDepartmentModal(department: any) {
//   // Pass a copy of the department to avoid two-way binding issues
//   this.selectedDepartment = { ...department };

//   // Open the Bootstrap modal with the correct ID
//   this.editModal = this.modalService.open('#edit_Department', { centered: true });

//   // This is just for debugging. You can remove it once it works.
//   this.editModal.result.then(
//       result => console.log('Modal closed with result:', result),
//       reason => console.log('Modal dismissed with reason:', reason)
//   );
// }

 

}