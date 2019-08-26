import {
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatRadioModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCardModule, MatProgressBarModule, MatRadioModule],
    exports: [MatButtonModule, MatCardModule, MatProgressBarModule, MatRadioModule]
})
export class AngularMaterialModule { }
