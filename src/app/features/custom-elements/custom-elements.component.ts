import { Component, OnInit } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { DomSanitizer } from '@angular/platform-browser';
import { SimpleComponent } from './components/simple/simple.component';

@Component({
  selector: 'app-custom-elements',
  templateUrl: './custom-elements.component.html',
  styleUrls: ['./custom-elements.component.scss'],
})
export class CustomElementsComponent {
  public text;

  public constructor(public readonly domSanitizer: DomSanitizer) {
    this.text = this.domSanitizer.bypassSecurityTrustHtml(
      `<simple-element text='sanitizerInput'></simple-element>`
    );
  }

  public createCustomElement(): void {
    // Create element
    const simpleElement: NgElement & WithProperties<SimpleComponent> =
      document.createElement('simple-element') as any;

    // Listen to the close event
    simpleElement.addEventListener('closed', () =>
      document.body.removeChild(simpleElement)
    );

    // Set the message
    simpleElement.text = 'test';

    // Add to the DOM
    document.body.appendChild(simpleElement);
  }
}
