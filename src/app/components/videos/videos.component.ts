import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { VideoModel } from '../../model/Video';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videos',
  imports: [FormsModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
})
export class VideosComponent implements OnInit {
  videoList: VideoModel[] = [];
  videoObj: VideoModel = new VideoModel();
  videoSrv = inject(VideoService);

  ngOnInit(): void {
    this.getVideos();
  }
  getVideos() {
    this.videoSrv.getVideos().subscribe((result: any) => {
      this.videoList = result.data;
    });
  }

  onSaveVideo() {
    this.videoSrv.saveVideo(this.videoObj).subscribe((result: any) => {
      if (result.result) {
        alert('Save success!');
      } else {
        alert(result.message);
      }
    });
  }
}
