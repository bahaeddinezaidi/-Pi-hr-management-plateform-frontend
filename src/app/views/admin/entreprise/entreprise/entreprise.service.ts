import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from './entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private apiUrl = 'http://localhost:3000/entreprise';

constructor(private http: HttpClient) {}

createEntreprise(entrepriseData: Entreprise): Observable<any> {
  return this.http.post(`${this.apiUrl}`, entrepriseData);
}

getEntreprises(): Observable<any> {
  return this.http.get(`${this.apiUrl}`);
}


getEntrepriseByNom(nom: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/${nom}`);
}

}
