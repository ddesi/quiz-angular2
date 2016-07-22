import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

import {PersonService} from "./person.service";
import {Quiz} from "./quiz";
import {Person} from "./person";

@Component({
    selector: 'quiz-page',
    templateUrl: 'app/quiz.html',
    styleUrls: ['app/quiz.css'],
    providers: [PersonService]
})

export class QuizComponent implements OnInit {
   
    quiz: Quiz;
	people: Person[];

    constructor(
        private personService: PersonService){}

    getHints() {
		this.personService.retrievePeople().subscribe(
			function(people) {
				this.people = people[0].concat(people[1]);
				this.nextHint();
			}.bind(this)
		);
	}
	
	initialize() {
		this.quiz = new Quiz();
		this.quiz.image = 'http://www.thepoliticalinsider.com/wp-content/uploads/2016/02/guesswho.jpg';

	}

    ngOnInit(){
		this.initialize();
        this.getHints();
    }

    public checkName() {

		let person = this.people[this.quiz.counter];
		let image = this.people[this.quiz.counter].image;
		let charDescription = this.people[this.quiz.counter].description;

		if (this.quiz.guessedName.toLowerCase() == person.name){

			this.quiz.guessedName = null;
			this.quiz.score = this.quiz.score+1;
			this.quiz.nameIsCorrect = true;
			this.quiz.nameIsincorrect = false;
			this.quiz.charDescription = charDescription;
			this.quiz.image = image;

		} else {

			this.quiz.guessedName = null;
			this.quiz.image = 'http://www.thepoliticalinsider.com/wp-content/uploads/2016/02/guesswho.jpg';
			this.quiz.nameIsincorrect = true;
			this.quiz.nameIsCorrect = false;

		}
	}

	public nextPerson() {

		if (this.hasMorePeople()) {

			this.quiz.guessedName = null;
			this.quiz.image = 'http://www.thepoliticalinsider.com/wp-content/uploads/2016/02/guesswho.jpg';
			this.quiz.nameIsCorrect = false;
			this.quiz.nameIsincorrect = false;
			this.quiz.counter = this.quiz.counter+1;
			this.quiz.visibleHints = [];
			this.nextHint();

		} else {

			this.initialize();
			this.nextHint();
		}
	}
	
	public hasMorePeople(){
		
		if (this.people == undefined) {

			return false;

		} else if (this.quiz.counter !== this.people.length-1) {
			
			return true;
			
		} else {
			
			return false;
			
		}
	}

	public nextHint() {

		let hintCounter = this.quiz.visibleHints.length;
		let nextHint = this.people[this.quiz.counter].hints[hintCounter];

		if (this.hasMoreHints()==true) {

			this.quiz.visibleHints.push(nextHint);

		} else {

			this.nextPerson();

		}

	}

	public hasMoreHints() {

		let hintCounter = this.quiz.visibleHints.length;

		if (this.people == undefined) {

			return false;

		} else if (hintCounter !== this.people[this.quiz.counter].hints.length+1) {

			return true;

		} else {

			return false;

		}
	}







}