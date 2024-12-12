import { Component, inject } from '@angular/core';
import { VideoModel } from '../../model/Video';
import { VideoService } from '../../services/video.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponent/my-button/my-button.component';

@Component({
  selector: 'app-video-master',
  imports: [ReactiveFormsModule, AlertComponent, MyButtonComponent],
  templateUrl: './video-master.component.html',
  styleUrl: './video-master.component.css',
})
export class VideoMasterComponent {
  videoList: VideoModel[] = [];
  videoForm: FormGroup = new FormGroup({
    videoId: new FormControl(0),
    videoTitle: new FormControl(''),
    videoUrl: new FormControl(''),
    totalDuration: new FormControl(''),
    videoDescription: new FormControl(''),
    videoThumbnail: new FormControl(''),
  });
  videoSrv = inject(VideoService);
  name: string = 'Ram Kumar';
  ngOnInit(): void {
    this.getVideos();
  }
  getVideos() {
    this.videoSrv.getVideos().subscribe((result: any) => {
      this.videoList = result.data;
    });
  }

  onSaveVideo() {
    const formValue = this.videoForm.value;
    this.videoSrv.saveVideo(formValue).subscribe((result: any) => {
      if (result.result) {
        alert('Save success!');
        this.getVideos();
      } else {
        alert(result.message);
      }
    });
  }
  onClick(data: string) {
    console.log(data);
  }
  // onUpdateVideo() {
  //   this.videoSrv.updateVideo(this.videoObj).subscribe((result: any) => {
  //     if (result.result) {
  //       alert('Save success!');
  //     } else {
  //       alert(result.message);
  //     }
  //   });
  // }
  // onEdit(data: VideoModel) {
  //   this.videoObj = data;
  // }
  // onDelete(id: number) {
  //   const isDelete = confirm('Are you sure that you want to delete this?');
  //   if (isDelete) {
  //     this.videoSrv.deleteVideo(id).subscribe((result: any) => {
  //       if (result.result) {
  //         alert('Delete  success!');
  //       } else {
  //         alert(result.message);
  //       }
  //     });
  //   }
  // }
  onEdit(data: VideoModel) {}
  onDelete(id: number) {}
}
