import { Component, OnInit} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss'],
  animations: [
    trigger('greet', [
      state('start', style({})),
      transition('* => void', [
        style({opacity: 1}),
        animate(800, style({
          opacity: 0,
          transform: 'scale(1.2)'
        }))
      ])
    ])
  ]
})
export class GreetComponent implements OnInit {

  greetbox = 'start'
  visible = true

  constructor() { }

  ngOnInit(): void {
    this.animate()
  }

  

  animate(){
    setTimeout(()=>{
      this.visible = !this.visible
    },5000)
  }

}
