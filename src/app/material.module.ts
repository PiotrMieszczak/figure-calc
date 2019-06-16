import { MatButtonModule,
  MatStepperModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatRadioModule } from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [
      MatButtonModule,
      MatStepperModule,
      MatRadioModule,
      MatSelectModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatToolbarModule
    ],
    exports: [
      MatButtonModule,
      MatStepperModule,
      MatRadioModule,
      MatSelectModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatToolbarModule
    ],
})
export class CustomMaterialModule { }
