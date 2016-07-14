import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import {PersonService} from "./person.service";
import {Person} from "./person";

@Component({
    selector: 'quiz-page',
    templateUrl: 'app/quiz.html',
    styleUrls: ['app/quiz.css'],
    providers: [PersonService]
})

export class QuizComponent implements OnInit {
   
    people: Person[];
    visibleHints: Person[] = [];
	image: string;
	charDescription: Person[] = [];
	guessedName: string;
	counter = 0;

    constructor(
        private personService: PersonService
    ){}

    getHints() {
		this.personService.retrievePeople().subscribe(people =>this.people = people[0].concat(people[1]));
	}
   
    ngOnInit(){
        this.getHints();
    }

    reloadPage() {
		window.location.reload();
	}
    
    public checkName() {

		let person = this.people[this.counter];

		if (this.guessedName == person.name){

			this.charDescription.push(this.people[this.counter].description);

			this.visibleHints = [];
			this.nextHint();

		} else {

			alert('nope try again');

		}
	}

	public nextPerson() {

		if (this.counter !== this.people.length-1) {

			this.counter = this.counter+1;
			this.visibleHints = [];
			this.nextHint();

		} else {

			alert('you are done! no more hints nor people');

		}
	}

	public nextHint() {

		let hintCounter = this.visibleHints.length;
		let nextHint = this.people[this.counter].hints[hintCounter];

		if (hintCounter == this.people[this.counter].hints.length) {

            let image = this.people[this.counter].image;
			this.image = image;
            this.visibleHints.length = hintCounter+1;

		} else if (hintCounter == this.people[this.counter].hints.length+1) {

			this.nextPerson();
            this.image = null;

		} else {

			this.visibleHints.push(nextHint);

		}

	}



}