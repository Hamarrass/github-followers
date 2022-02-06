
import { GithubfellowersService } from './services/githubfellowers.service';
import { PostService } from './services/post.service';
import {HttpClient ,HttpClientModule} from '@angular/common/http'
import { EmailService } from './email.service';
import { CourseService } from './course.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ResumePipe } from './resume.pipe';
import { StarComponent } from './star/star.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { GithubfellowersComponent } from './githubfellowers/githubfellowers.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [

    AppComponent,
    CourseComponent,
    ResumePipe,
    StarComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    GithubfellowersComponent,
    ProfileFollowerComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
   ],
  providers: [CourseService,EmailService,PostService,GithubfellowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
