import { inject, Injectable } from '@angular/core';
import {  map, Observable } from 'rxjs';

import { FirebaseService } from '../../firebase/firebase.service';
import { Students } from '../models/students.model';
import { firebaseUrl } from '../../firebase/firebase-config';

@Injectable({
  providedIn: 'root'
})
export class StudentsServicesService {

  firebase=inject(FirebaseService);

  getStudents():Observable<Array<Students>>{
    return this.firebase.getRequest<Array<Students>>('students').pipe(map(
      (student) =>Object.values(student)
    ))
 }
 addStudent(student: Students): Observable<any> {
  return this.firebase.postRequest(`${firebaseUrl}students.json`, student, { 'content-type': 'application/json' });
}

  
}
