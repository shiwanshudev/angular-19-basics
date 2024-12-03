import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}
  apiURL = 'https://projectapi.gerasim.in/api/OnlineLearning/';

  getVideos() {
    debugger;
    return this.http.get(this.apiURL + 'GetAllVideos');
  }
}
