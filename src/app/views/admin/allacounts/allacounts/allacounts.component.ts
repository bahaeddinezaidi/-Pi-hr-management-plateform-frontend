import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../../../Cors/Services/UserService/user.service';
import { User } from '../../../../Cors/Models/User';

@Component({
  selector: 'app-allacounts',
  templateUrl: './allacounts.component.html',
  styleUrl: './allacounts.component.css'
})
export class AllacountsComponent  implements OnInit{
  users$!: Observable<User[]>; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers(); 
  }

  loadUsers(): void {
    this.users$ = this.userService.getAllusers(); 
  }
  activateUser(userId: string|undefined) {
    this.userService.activateUser(userId).subscribe(
      response => {
        this.loadUsers();   
         },
      error => {
      }
    );
  }

  deactivateUser(userId: string|undefined) {
    this.userService.deactivateUser(userId).subscribe(
      response => {
       this.loadUsers();
      },
      error => {
        // Gérer l'erreur en cas d'échec de la désactivation de l'utilisateur
      }
    );
  }
}
