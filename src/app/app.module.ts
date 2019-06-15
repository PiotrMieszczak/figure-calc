import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './material.module';
import { StepperComponent } from './container/stepper/stepper.component';
import { ChoiceFormComponent } from './components/choice-form/choice-form.component';
import { ResultsFormComponent } from './components/results-form/results-form.component';

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
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
