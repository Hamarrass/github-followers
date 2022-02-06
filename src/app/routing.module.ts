import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { GithubfellowersComponent } from './githubfellowers/githubfellowers.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'',component:HomeComponentComponent},
  {path:'followers',component:GithubfellowersComponent },
  {path:'followers/:username/:login',component:ProfileFollowerComponent },
  {path:'posts',component:PostsComponent },
  { path: '**', component: PageNoteFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
