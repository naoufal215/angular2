import {Component} from '@angular/core';
import {PostsService} from '../services/postes.services';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl: `user.component.html`,
  providers:[PostsService]
})
export class UserComponent {
  name: String;
  email: String;
  address:address;
  hobbies: String[];
  showHobbies: boolean;
  posts:Post[];
  
  constructor(private postservice:PostsService){
    this.name='naoufal berouain';
    this.email='naoufal.berouain@gmail.com';
    this.address={street:'riad salam',
           city:'mohammedia',
           country:'Morocco'
         }
    this.hobbies=['footbal','swimming','gaming'];
    this.showHobbies=true;
    this.postservice.getPosts().subscribe(posts=>{this.posts=posts});
  }
  isShowHobbies(){
    if(this.showHobbies==true){
        this.showHobbies=false;
    }
    else{
      this.showHobbies=true;
    }
  }
  addHobby(value:String){
      this.hobbies.push(value);
  }
  deleteHobby(i:number){
    this.hobbies.splice(i,1);
  }
}
 interface address{
   street: String;
   city:String;
   country:String
  }
 interface Post{
   body:String;
   id:number;
   title:String;
  }