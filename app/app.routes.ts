import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home.component';
import { QuizComponent } from './quiz.component';
// import { PersonComponent } from './person.component';

const routes: RouterConfig = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'quiz', component: QuizComponent
    }
];

export const appRouterProviders = [
  provideRouter(routes)
];
