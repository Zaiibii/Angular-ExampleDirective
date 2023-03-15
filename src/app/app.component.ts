import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExampleDirective';


 videos=[
    {title:'My Video 1', share:112, likes:113343, dislikes:50, thumbnail:'../assets/my video 1.jpg'},
    {title:'My Video 2', share:1012, likes:43343, dislikes:10, thumbnail:'../assets/my video 2.jpg'},
    {title:'My Video 3', share:12, likes:343, dislikes:333, thumbnail:'../assets/my video 3.jpg'}
  ]

  mostlikedvideo=this.getmostlikedvideo();

  getmostlikedvideo(){
    let videocopy=[...this.videos];
    return videocopy.sort((curr,next)=>next.likes-curr.likes)[0];
}
}
