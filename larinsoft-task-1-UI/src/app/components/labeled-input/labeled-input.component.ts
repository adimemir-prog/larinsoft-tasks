import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-labeled-input',
  templateUrl: './labeled-input.component.html',
  styleUrls: ['./labeled-input.component.scss'],
})
// export class LabeledInputComponent {
//   @Input() label: string;
//   @Input() helpText: string;
//   @Input() required: boolean = false;
// }
export class LabeledInputComponent implements DoCheck {
  @Input() label: string;
  @Input() helpText: string;
  @Input() required: boolean = false;

  ngDoCheck() {
    
  }
}


