import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  constructor(private http: HttpClient) {}

  uploadImage(file: File): any {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post('/assets/images', formData);
  }
}
