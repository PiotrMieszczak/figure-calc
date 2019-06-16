import { MatButtonModule,
  MatStepperModule,
  MatSelectModule,
  MatIconModule,
  MatFormFieldModule,
  MatRadioModule } from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [
      MatButtonModule,
      MatStepperModule,
      MatRadioModule,
      MatSelectModule,
      MatIconModule,
      MatFormFieldModule
    ],
    exports: [
      MatButtonModule,
      MatStepperModule,
      MatRadioModule,
      MatSelectModule,
      MatIconModule,
      MatFormFieldModule
    ],
})
export class CustomMaterialModule { }
