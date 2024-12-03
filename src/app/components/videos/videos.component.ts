import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { VideoModel } from '../../model/Video';

@Component({
  selector: 'app-videos',
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
})
export class VideosComponent implements OnInit {
  videoList: VideoModel[] = [];
  videoSrv = inject(VideoService);

  ngOnInit(): void {
    debugger;
    this.getVideos();
  }
  getVideos() {
    debugger;
    this.videoSrv.getVideos().subscribe((result: any) => {
      debugger;
      this.videoList = result.data;
    });
  }
}
