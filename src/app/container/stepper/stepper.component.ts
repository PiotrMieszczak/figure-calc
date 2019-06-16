import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  public horizontalView: boolean = true;
  
  constructor(private _breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this._breakpointObserver
      .observe(['(min-width: 566px)'])
      .subscribe((state: BreakpointState) => {
        this.horizontalView = !state.matches ? false : true;
      });
  }

}
