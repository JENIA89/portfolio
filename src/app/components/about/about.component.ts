import { Component, OnInit } from '@angular/core';
import { Container, Main } from 'tsparticles';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  id: string = "tsparticles";

  constructor() { }

  ngOnInit(): void {
  }

  particlesOptions = {
    
    background: {
      color: "#000"
    },
    detectRetina: false,
    fpsLimit: 30,
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true
      }
    },
    particles: {
      color: {
        value: "#fff"
      },
      number: {
        density: {
          enable: true,
          area: 500
        },
        limit: 0,
        value: 400
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.05,
          speed: 2,
          sync: false
        },
        random: {
          enable: true,
          minimumValue: 0.5
        },
        value: 1
      },
      shape: {
        type: "circle"
      },
      size: {
        random: {
          enable: true,
          minimumValue: 0.5
        },
        value: 1
      }
    }
  }



particlesLoaded(container: Container ): void {
  console.log(container);
}

particlesInit(main: Main): void {
  console.log(main);
  
}

}
