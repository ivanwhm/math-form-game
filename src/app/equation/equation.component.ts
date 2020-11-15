import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl(''),
    },
    [MathValidators.addition]
  );

  constructor() {}

  ngOnInit(): void {}

  get a(): number {
    return this.mathForm.value.a;
  }

  get b(): number {
    return this.mathForm.value.b;
  }

  private randomNumber(): number {
    return Math.floor(Math.random() * 10);
  }
}
