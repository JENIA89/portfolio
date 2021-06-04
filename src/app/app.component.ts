import { Component, OnInit } from '@angular/core';
import { Main, Container } from 'tsparticles';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  id: string = "tsparticles";
  
 
  constructor(){}

  ngOnInit(){

  }
  
  particlesOptions = {
    background: {
        color: {
            value: "black"
        }
    },
    fpsLimit: 60,
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 2
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: "#ffffff"
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 2,
            straight: false
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 40
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            random: true,
            value: 5
        }
    },
    detectRetina: true
};



particlesLoaded(container: Container): void {
  console.log(container);
}

particlesInit(main: Main): void {
  console.log(main);
  
}

}
