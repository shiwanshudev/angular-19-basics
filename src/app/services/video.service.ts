import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoModel } from '../model/Video';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}
  apiURL = 'https://projectapi.gerasim.in/api/OnlineLearning/';

  getVideos() {
    return this.http.get(this.apiURL + 'GetAllVideos');
  }
  saveVideo(obj: VideoModel) {
    return this.http.post(this.apiURL + 'AddNewVideo', obj);
  }
}
