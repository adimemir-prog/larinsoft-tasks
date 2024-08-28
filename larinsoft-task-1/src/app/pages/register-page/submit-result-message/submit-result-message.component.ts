import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-submit-result-message',
  templateUrl: './submit-result-message.component.html',
  styleUrls: ['./submit-result-message.component.scss']
})
export class SubmitResultMessageComponent {
  clicked_once = false;
  @Input() result_is_successful = true;
  must_show : boolean = false;
  // setInnerHTMLToFailure() {
  //   document.DOCUMENT_POSITION_FOLLOWING
  // }

  constructor(/*private element : ElementRef*/) {
    
  }

  show(element: any) {
    this.must_show = true;
    
    console.log(element);
    
    // $(this.element.nativeElement).fadeOut(duration, ()=>{this.color = "green"; this.element.nativeElement.style.backgroundColor = this.color;} ).fadeIn(duration2);
    setTimeout(()=>{this.must_show=false}, 850)
    // element.fadeOut(700, ()=>{this.must_show=false;} )    
  }
}
