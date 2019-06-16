import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './material.module';
import { StepperComponent } from './container/stepper/stepper.component';
import { ChoiceFormComponent } from './components/choice-form/choice-form.component';
import { ResultsFormComponent } from './components/results-form/results-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    ChoiceFormComponent,
    ResultsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
