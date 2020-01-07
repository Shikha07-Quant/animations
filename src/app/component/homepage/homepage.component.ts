import {Component, OnInit} from '@angular/core';
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';
import '../../../common/animation.gsap';
import '../../../common/debug.addIndicators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  ngOnInit() {
    this.animation();
  }

  private animation() {
    // @ts-ignore
    const timeline = new gsap.timeline({
      defaults: {
        duration: 1,
        ease: 'ease',
        transformOrigin: 'center'
      }
    });

    timeline
      .from('.pulseSVG', {
        opacity: 1,
      })
      .from('.astronaut', {
        duration: 0.1,
        y: '+=5',
      }, '-=1')
      .from('.jetBubble', {
        duration: 0.2,
        opacity: 1,
        scale: 0.8,
      })
      .from('.pulse', {
        opacity: 0,
        stagger: 0.2,
      })
      .from('#speedLine0', {
        y: '-=1000',
      })
      .from('#speedLine1', {
        y: '-=1000',
      })
      .from('#speedLine2', {
        y: '-=1000',
      })
      .from('#speedLine3', {
        y: '-=1000',
      })
      .from('#speedLine4', {
        y: '-=1000',
      })
      .from('#speedLine5', {
        y: '-=1000',
      })
      .from('#speedLine6', {
        y: '-=1000',
      });

    // ScrollMagic
    // @ts-ignore
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: '.wrapper',
      triggerHook: 0,
      duration: '100%',
      offset: 100
    })
      .setPin('.wrapper')
      .setTween(timeline)
      .addTo(controller)
      .addIndicators();
  }
}
