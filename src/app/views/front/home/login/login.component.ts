import { Component } from '@angular/core';
import { UserService } from '../../../../Cors/Services/UserService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Assurez-vous que le nom du styleUrl est styleUrls
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private userService: UserService, private router: Router) {}

  // onSubmit(): void {
  //   this.userService.login(this.email, this.password).subscribe(
  //     response => {
  //       console.log('Login successful');
  //       localStorage.setItem('token',  response.token);
  //       let token = localStorage.getItem('token');
  //       console.log(token);
  //       console.log(response.token);
  //       this.userService.checkIfAdmin(token).subscribe(
         
  //         isAdmin => {
  //           if (isAdmin) {
  //             this.router.navigate(['/admin']);
  //           } else {
  //             this.router.navigate(['/']);
  //           }
  //         },
  //         error => {
  //           console.error('Error checking admin status', error);
  //         }
  //       );
  //     },
  //     error => {
  //       console.error('Login failed', error);
  //     }
  //   );
  // }
  onSubmit(): void {
    this.userService.login(this.email, this.password).subscribe(
      response => {
        console.log('Login successful');
        let token = this.userService.getAuthToken(); // Utilisez la méthode getAuthToken() du service d'authentification pour récupérer le token du cookie
        console.log(token);
        console.log(response.token);
        this.userService.checkIfAdmin(token).subscribe(
          isAdmin => {
            if (isAdmin) {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/']);
            }
          },
          error => {
            console.error('Error checking admin status', error);
          }
        );
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
