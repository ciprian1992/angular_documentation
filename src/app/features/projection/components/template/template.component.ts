import { Component, ContentChild, OnInit } from '@angular/core';
import { TemplateContentDirective } from './template-content.directive';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  @ContentChild(TemplateContentDirective)
  public content!: TemplateContentDirective;
}
