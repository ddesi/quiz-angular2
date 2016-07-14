import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AnimationService, AnimationBuilder } from 'css-animator';
import {HTTP_PROVIDERS} from "@angular/http";

import { PersonService } from './person.service';
import { HomeComponent } from './home.component';
import { QuizComponent } from './quiz.component';


@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    styleUrls: ['app/app.css'],
    directives:ROUTER_DIRECTIVES,
    providers: [AnimationService, PersonService, HTTP_PROVIDERS],
    precompile: [HomeComponent, QuizComponent]
})

export class AppComponent implements OnInit {
    private animator: AnimationBuilder;
    
    constructor(animationService: AnimationService, private elementRef: ElementRef) {
    this.animator = animationService.builder();
  }
    
    public loadApp(){
        let loadingElem = document.getElementById('app-loader');
        this.animator
            .setType('fadeOut')
            .setDuration(500)
            .hide(loadingElem)
    }

    ngOnInit(){
        this.loadApp();
    }
}