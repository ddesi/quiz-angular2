import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import { AnimationService, AnimationBuilder } from 'css-animator';


@Component({
    selector: 'home-page',
    templateUrl: 'app/home.html',
    styleUrls: ['app/home.css'],
    directives:[ROUTER_DIRECTIVES]
})

export class HomeComponent {
    private router: Router;
    private animator: AnimationBuilder;

    constructor(animationService: AnimationService, private elementRef: ElementRef) {
    this.animator = animationService.builder();
  }

    // public showIntro(){
    //     this.animator
    //         .setType('fadeInUp')
    //         .setDelay(200)
    //         .setDuration(400)
    //         .show(this.elementRef.nativeElement)
    // }

    //function is called on button click in html file
    // public startQuiz(){
    //     // this.animator
    //     //     .setType('fadeOutDown')
    //     //     .setDelay(200)
    //     //     .setDuration(400)
    //     //     .hide(this.elementRef.nativeElement)
    //     //     .then(() => {
    //     //         this.router.navigate(['/quiz']);
    //     //     });
    //
    //     this.router.navigateByUrl('/quiz');
    // }
    //
    // ngOnInit(){
    //     // this.showIntro();
    // }

    //do i need this??
    // ngAfterViewInit(){
    //     this.startQuiz();
    // }



}