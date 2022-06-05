import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './features/custom-elements/components/simple/simple.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(public readonly injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const simpleElement = createCustomElement(SimpleComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('simple-element', simpleElement);
  }
}
