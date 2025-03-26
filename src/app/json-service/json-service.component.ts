import { Component } from '@angular/core';
import { StudentsService } from '../service/students.service';
import { Student } from '../interface/student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-json-service',
  imports: [FormsModule],
  templateUrl: './json-service.component.html',
  styleUrl: './json-service.component.css',
})
export class JsonServiceComponent {
  students: Student[] = [];
  selectedStudent: Student | undefined;

  constructor(private studentService: StudentsService) {}

  ngOnInit() {
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
    });
  }

  addStudent(studentForm: Student) {
    if (!this.selectedStudent) {
      this.studentService
        .saveStudent(studentForm)
        .subscribe((data: Student) => {
          if (data) {
            console.log(studentForm);
            this.getStudent();
          }
        });
    } else {
      const studentData = { ...studentForm, id: this.selectedStudent.id };
      this.studentService
        .updateStudent(studentData)
        .subscribe((data: Student) => {
          if (data) {
            console.log(studentForm + 'update ');
            this.getStudent();
            this.selectedStudent = undefined;
          }
        });
    }
  }

  deleteStudent(id: string) {
    console.log(id);
    this.studentService.deleteStudent(id).subscribe((data: Student) => {
      if (data) {
        this.getStudent();
      }
    });
  }

  selectStudent(id: string) {
    this.studentService.selectStudent(id).subscribe((data: Student) => {
      this.selectedStudent = data;
    });
  }
}
