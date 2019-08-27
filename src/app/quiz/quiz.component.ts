import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../_services/question.service';
import { QuestionModal } from '../../_modal/question.modal';

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
  questions;
  selectedOption;
  buttonText = "Next";
  
  constructor(private quizQuestionsService: QuestionService) {

  }
  ngOnInit() {
    this.questions = this.quizQuestionsService.getQuestions();
    this.questions.subscribe((questions: QuestionModal[]) => {
      this.questionCount = questions['questions'].length;
      this.progressValue = 100 * (this.currentQuestion + 1) / this.questionCount;
    });
  }

  nextQuestion(answer: number) {
    if (answer === this.selectedOption) { this.correctCount++; }
    delete this.selectedOption;
    this.currentQuestion++;
    this.progressValue = 100 * (this.currentQuestion + 1) / this.questionCount;
    if (this.questionCount == this.currentQuestion + 1) {
      this.buttonText = "Finish";
    }
  }

  restartTest() {
    this.correctCount = 0;
    this.currentQuestion = 0;
    this.progressValue = 0;
    this.questions = this.quizQuestionsService.getQuestions();
    this.questions.subscribe((questions: QuestionModal[]) => {
      this.questionCount = questions['questions'].length;
      this.progressValue = 100 * (this.currentQuestion + 1) / this.questionCount;
    });
  }
}
