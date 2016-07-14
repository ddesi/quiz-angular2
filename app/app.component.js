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
var router_1 = require('@angular/router');
var css_animator_1 = require('css-animator');
var http_1 = require("@angular/http");
var person_service_1 = require('./person.service');
var home_component_1 = require('./home.component');
var quiz_component_1 = require('./quiz.component');
var AppComponent = (function () {
    function AppComponent(animationService, elementRef) {
        this.elementRef = elementRef;
        this.animator = animationService.builder();
    }
    AppComponent.prototype.loadApp = function () {
        var loadingElem = document.getElementById('app-loader');
        this.animator
            .setType('fadeOut')
            .setDuration(500)
            .hide(loadingElem);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.loadApp();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/app.html',
            styleUrls: ['app/app.css'],
            directives: router_1.ROUTER_DIRECTIVES,
            providers: [css_animator_1.AnimationService, person_service_1.PersonService, http_1.HTTP_PROVIDERS],
            precompile: [home_component_1.HomeComponent, quiz_component_1.QuizComponent]
        }), 
        __metadata('design:paramtypes', [css_animator_1.AnimationService, core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map