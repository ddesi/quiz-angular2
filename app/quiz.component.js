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
var QuizComponent = (function () {
    function QuizComponent(personService) {
        this.personService = personService;
        this.visibleHints = [];
        this.charDescription = [];
        this.counter = 0;
    }
    QuizComponent.prototype.getHints = function () {
        var _this = this;
        this.personService.retrievePeople().subscribe(function (people) { return _this.people = people[0].concat(people[1]); });
    };
    QuizComponent.prototype.ngOnInit = function () {
        this.getHints();
    };
    QuizComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    QuizComponent.prototype.checkName = function () {
        var person = this.people[this.counter];
        if (this.guessedName == person.name) {
            this.charDescription.push(this.people[this.counter].description);
            this.visibleHints = [];
            this.nextHint();
        }
        else {
            alert('nope try again');
        }
    };
    QuizComponent.prototype.nextPerson = function () {
        if (this.counter !== this.people.length - 1) {
            this.counter = this.counter + 1;
            this.visibleHints = [];
            this.nextHint();
        }
        else {
            alert('you are done! no more hints nor people');
        }
    };
    QuizComponent.prototype.nextHint = function () {
        var hintCounter = this.visibleHints.length;
        var nextHint = this.people[this.counter].hints[hintCounter];
        if (hintCounter == this.people[this.counter].hints.length) {
            var image = this.people[this.counter].image;
            this.image = image;
            this.visibleHints.length = hintCounter + 1;
        }
        else if (hintCounter == this.people[this.counter].hints.length + 1) {
            this.nextPerson();
            this.image = null;
        }
        else {
            this.visibleHints.push(nextHint);
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