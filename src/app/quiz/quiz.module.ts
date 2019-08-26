import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import {AngularMaterialModule} from '../../_style/angularmaterial.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule, FormsModule, AngularMaterialModule, RouterModule
  ]
})
export class QuizModule { }
