import {MatButtonModule, MatStepperModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
      MatButtonModule,
      MatStepperModule
    ],
    exports: [
      MatButtonModule,
      MatStepperModule
    ],
})
export class CustomMaterialModule { }
