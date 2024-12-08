import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { VideosComponent } from './components/videos/videos.component';
import { PostComponent } from './components/post/post.component';
import { VideoMasterComponent } from './components/video-master/video-master.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'control-flow', component: ControlFlowComponent },
  { path: 'get-api', component: GetApiComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'posts', component: PostComponent },
  { path: 'video-master', component: VideoMasterComponent },
];
