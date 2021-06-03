import { Component,  HostListener, OnInit, } from '@angular/core';
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
          transform: 'scale(1.3)'
        }))
      ])
    ])
  ]
})
export class GreetComponent implements OnInit {

  greetbox = 'start'
  visible = true
  video: HTMLVideoElement
  videoPlayed: boolean = false
  
  
  constructor() { }

  @HostListener('window:beforeunload') onWindowBeforeUnLoad() {
    this.video  = document.querySelector('video');
    this.video.play();
  }

  @HostListener('window:load') onWindowLoad(){
    this.initVideo()
  }

  ngOnInit(): void {
    this.initVideo()
  }

  initVideo() {
    this.video = document.querySelector('video');
    this.video.muted = true;
    this.video.autoplay = true;
    this.video.loop = true;
    this.video.playsInline = true;
    this.video.preload = 'auto';
    this.video.addEventListener('canplay', () => {
      this.video.play();
      this.videoPlayed = true
    });
    setTimeout(()=>{
      this.visible = !this.visible
    },4000)
  }

}
