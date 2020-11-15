import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { filter, map } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]',
})
export class AnswerHighlightDirective implements OnInit {
  constructor(private el: ElementRef, private controlName: NgControl) {}

  ngOnInit(): void {
    this.controlName.control.parent.valueChanges
      .pipe(
        map(({ a, b, answer }) => Math.abs((a + b - answer) / (a + b))),
        filter((value: number) => value < 0.2)
      )
      .subscribe(() => {});
  }
}
