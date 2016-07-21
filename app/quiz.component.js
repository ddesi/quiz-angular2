"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var person_service_1 = require("./person.service");
var quiz_1 = require("./quiz");
var QuizComponent = (function () {
    function QuizComponent(personService) {
        this.personService = personService;
    }
    QuizComponent.prototype.getHints = function () {
        var _this = this;
        this.personService.retrievePeople().subscribe(function (people) { return _this.people = people[0].concat(people[1]); });
    };
    QuizComponent.prototype.initialize = function () {
        var _this = this;
        this.quiz = new quiz_1.Quiz();
        this.quiz.image = 'http://www.thepoliticalinsider.com/wp-content/uploads/2016/02/guesswho.jpg';
        setTimeout(function () {
            _this.nextHint();
        }, 800);
    };
    QuizComponent.prototype.ngOnInit = function () {
        this.initialize();
        this.getHints();
    };
    QuizComponent.prototype.checkName = function () {
        var person = this.people[this.quiz.counter];
        var image = this.people[this.quiz.counter].image;
        var charDescription = this.people[this.quiz.counter].description;
        if (this.quiz.guessedName == person.name) {
            this.quiz.guessedName = null;
            this.quiz.score = this.quiz.score + 1;
            this.quiz.nameIsCorrect = true;
            this.quiz.nameIsincorrect = false;
            this.quiz.charDescription = charDescription;
            this.quiz.image = image;
        }
        else {
            this.quiz.guessedName = null;
            this.quiz.image = 'http://www.thepoliticalinsider.com/wp-content/uploads/2016/02/guesswho.jpg';
            this.quiz.nameIsincorrect = true;
            this.quiz.nameIsCorrect = false;
        }
    };
    QuizComponent.prototype.nextPerson = function () {
        if (this.hasMorePeople()) {
            this.quiz.image = 'http://www.thepoliticalinsider.com/wp-content/uploads/2016/02/guesswho.jpg';
            this.quiz.nameIsCorrect = false;
            this.quiz.nameIsincorrect = false;
            this.quiz.counter = this.quiz.counter + 1;
            this.quiz.visibleHints = [];
            this.nextHint();
        }
        else {
            this.initialize();
        }
    };
    QuizComponent.prototype.hasMorePeople = function () {
        if (this.people == undefined) {
            return false;
        }
        else if (this.quiz.counter !== this.people.length - 1) {
            return true;
        }
        else {
            return false;
        }
    };
    QuizComponent.prototype.nextHint = function () {
        var hintCounter = this.quiz.visibleHints.length;
        var nextHint = this.people[this.quiz.counter].hints[hintCounter];
        if (this.hasMoreHints() == true) {
            this.quiz.visibleHints.push(nextHint);
        }
        else {
            this.nextPerson();
        }
    };
    QuizComponent.prototype.hasMoreHints = function () {
        var hintCounter = this.quiz.visibleHints.length;
        if (this.people == undefined) {
            return false;
        }
        else if (hintCounter !== this.people[this.quiz.counter].hints.length + 1) {
            return true;
        }
        else {
            return false;
        }
    };
    QuizComponent = __decorate([
        core_1.Component({
            selector: 'quiz-page',
            templateUrl: 'app/quiz.html',
            styleUrls: ['app/quiz.css'],
            providers: [person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService])
    ], QuizComponent);
    return QuizComponent;
}());
exports.QuizComponent = QuizComponent;
//# sourceMappingURL=quiz.component.js.map