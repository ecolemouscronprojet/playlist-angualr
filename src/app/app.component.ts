import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ma playlist';
  

  addItem($event: number){
    console.log('APPCOMPONENT', $event);
  }
}
