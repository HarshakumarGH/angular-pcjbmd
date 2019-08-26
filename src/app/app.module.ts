import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app.route.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuizModule } from './quiz/quiz.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../_style/angularmaterial.module';
import { ServiceModule } from '../_services/services.module';
@NgModule({
  imports:      [ AppRoutingModule,BrowserModule, FormsModule,BrowserAnimationsModule, FormsModule, HttpClientModule,
      AngularMaterialModule, QuizModule, ServiceModule],
  declarations: [ AppComponent, WelcomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
