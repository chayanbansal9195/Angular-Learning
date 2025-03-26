import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interface/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    const url = 'http://localhost:3000/students';
    return this.http.get<Student[]>(url);
  }

  saveStudent(student: Student): Observable<Student> {
    const url = 'http://localhost:3000/students';
    return this.http.post<Student>(url, student);
  }
  deleteStudent(id: string): Observable<Student> {
    const url = 'http://localhost:3000/students';
    return this.http.delete<Student>(url + '/' + id);
  }
  selectStudent(id: string): Observable<Student> {
    const url = 'http://localhost:3000/students';
    return this.http.get<Student>(url + '/' + id);
  }
  updateStudent(studentUpdate: Student): Observable<Student> {
    const url = 'http://localhost:3000/students';
    return this.http.put<Student>(url + '/' + studentUpdate.id,studentUpdate);
  }
}
