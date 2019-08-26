import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizComponent} from '../app/quiz/quiz.component';
import {WelcomeComponent} from '../app/welcome/welcome.component';

export const appRoutes: Routes = [
    {path: 'welcome', component: WelcomeComponent},
    {path: 'quiz', component: QuizComponent},
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
