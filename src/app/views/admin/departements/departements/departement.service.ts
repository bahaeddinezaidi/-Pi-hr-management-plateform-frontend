import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../departement.model';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private apiUrl = 'http://localhost:3000/departements';

  constructor(private http: HttpClient) {}

  createDepartment(departmentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, departmentData);
  }
  getAllDepartments(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  updateDepartment(id: string, updateDepartmentDto: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, updateDepartmentDto);
}
getDepartmentById(id: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/${id}`);
}


deleteDepartment(id: string): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete(url);
}
}
