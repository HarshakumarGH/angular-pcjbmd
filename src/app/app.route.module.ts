import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {QuizQuestionComponent} from '../features/quiz/quiz-question/quiz-question.component';
import {WelcomeComponent} from '../app/welcome/welcome.component';

export const appRoutes: Routes = [
    {path: 'welcome', component: WelcomeComponent},
    // {path: 'quiz-question', component: QuizQuestionComponent},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
