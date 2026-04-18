import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class Control {
  @Input() labelText: string = '';
  @Input() for: string = '';

  // @ContentChild('input') inputElement!: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private inputElement = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log(this.inputElement());
  }
}
