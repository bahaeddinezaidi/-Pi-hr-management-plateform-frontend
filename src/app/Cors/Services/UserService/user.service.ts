import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { SignupDto } from '../../Models/signupDto';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000'; 
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  // login(email: string, password: string): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/auth/login`, { email, password });
  // }
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, { email, password }, { withCredentials: false })
      .pipe(
        tap(response => {
          const token = response.token;
          this.cookieService.set('user_token', token);
        }),
        catchError(error => {
          console.error('Erreur de connexion:', error);
          return throwError(error);
        })
      );
  }
  // logout(): Observable<void> {
  //   return this.http.post<void>(`${this.baseUrl}/auth/logout`, {}, { withCredentials: false});
  // }
  getAuthToken(): string {
    return this.cookieService.get('user_token');
  }
  checkIfAdmin(token: string | null): Observable<any> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<any>(`${this.baseUrl}/auth/check-admin`, { headers });
  }
  signup(signupDto: SignupDto): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/auth/signup`, signupDto);
  }
  
  logout(): Observable<void> {
    const token = this.getCookie('user_token'); 
console.log(token);
    const httpOptions = {
      headers: new HttpHeaders({
      
        'Authorization': `Bearer ${token}`
      })
    };
    this.cookieService.delete('user_token');


  return  this.http.post<void>(`${this.baseUrl}/auth/logout`, {}, httpOptions);
  }

  private getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const cookieValue = parts.pop()?.split(';').shift();
      if (cookieValue) {
        return cookieValue;
      }
    }
    return undefined;
  }

getAllusers():Observable<User[]>{
  return this.http.get<User[]>(`${this.baseUrl}/auth/allusers`)

}
activateUser(userId: string|undefined): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/auth/activate`, { userId });
}
deactivateUser(userId: string|undefined): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/auth/deactivate`, { userId });
}
}  
  
