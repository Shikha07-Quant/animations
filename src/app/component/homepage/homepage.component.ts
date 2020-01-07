import {Component, OnInit} from '@angular/core';
import {TimelineMax} from 'gsap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {

  clickMe() {
    // debugger;
    const tl = new TimelineMax();
    tl
      .to('#para', 1, {
      transformOrigin: 'center',
      scale: 1.2,
      ease: 'Expo.easeInOut'
    })
    .fromTo('.jetBubble', {
        opacity: 0,
      }, {
        opacity: 1,
      });
  }
}
