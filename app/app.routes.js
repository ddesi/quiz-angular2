"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var quiz_component_1 = require('./quiz.component');
// import { PersonComponent } from './person.component';
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'quiz', component: quiz_component_1.QuizComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map