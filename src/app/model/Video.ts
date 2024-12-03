export class VideoModel {
  videoId: number;
  videoTitle: string;
  videoUrl: string;
  totalDuration: string;
  videoDescription: string;
  videoThumbnail: string;

  constructor() {
    this.videoId = 0;
    this.videoTitle = '';
    this.videoUrl = '';
    this.totalDuration = '';
    this.videoDescription = '';
    this.videoThumbnail = '';
  }
}
