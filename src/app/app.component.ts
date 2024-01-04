import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 public LenthCounter = 0;
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
      console.log(event);
      if((event.keyCode>=65 && event.keyCode<=90) ){
        this.LenthCounter++;
       }
      if(event.keyCode==8){
      if(this.LenthCounter!=0)
      this.LenthCounter--;
      }
    }
  }
 

