import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts: any = [];
  isActive: boolean = true;
  erreur: any;
  status: boolean = false;


  post:any= {

    id: 0,
    title: '',
    body: '',
    userId : ''

  }



  constructor(private postService : PostService) {

  }

  ngOnInit(): void {

    this.getPost();

  }

  getPost() {
      this.postService.getall()
      .subscribe(response => {
        this.posts = response ;
      }, error => {

        this.erreur = error;
        this.status = true;
      });
 }



  createPost() {

       this.postService.create(this.post)
         .subscribe(response => {

          this.posts.unshift(response);
            this.post = {
            id: 0,
            title: '',
            body: '',
            userId : ''
                        }
        },

   (error: AppError) => {

      if (error instanceof  BadInput) {
        this.erreur = 'Merci de verfier vos informations ';
        this.status = true;
      }
      else {
        this.erreur = error+' erreur inattendue';
        this.status = true;
      }

    })
    }

  editPost(post: any) {
    this.post = post;

    this.isActive = false;
  }


  UpdatePost() {

    this.postService.Update(this.post).subscribe(() => {
      this.isActive = true;
           this.post = {
              id: 0,
              title: '',
              body: '',
              userId : ''
              }
    }, error => {
      this.erreur = error+' erreur inattendue';
      this.status = true;
      })

  }

  deletePost(post:any) {

    this.postService.delete(post)
      .subscribe(

        () => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index,1);
            },

        (error: AppError) => {

            if (error instanceof NotFoundError ) {
              this.erreur = 'this id is already deleted';
              this.status = true;
            }
            else {
              this.erreur = error + 'erreur inattendu';
              this.status = true;
            }

    });

  }



}
