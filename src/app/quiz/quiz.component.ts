import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../_services/question.service';
// import {QuizQuestion} from './quiz-question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
    correctCount = 0;
  currentQuestion = 0;
  progressValue = 0;
  questionCount;
  questions$;
  selectedOption;
  CONGRATULATIONS = 'assets/img/congratulations.jpg';
  TRY_AGAIN = 'assets/img/try-again.png';
  constructor(private quizQuestionsService: QuestionService) {
  }
 ngOnInit() {
    this.questions$ = this.quizQuestionsService.getQuestions();
    this.questions$.subscribe((questions) => {
        this.questionCount = questions['quiz-questions'].length;
        this.progressValue = 100 * (this.currentQuestion + 1) / this.questionCount;
    });
  }

  nextQuestion(answer: number) {
    if (answer === this.selectedOption) {this.correctCount++; }
    delete this.selectedOption;
    this.currentQuestion++;
    this.progressValue = 100 * (this.currentQuestion + 1) / this.questionCount;
  }
}