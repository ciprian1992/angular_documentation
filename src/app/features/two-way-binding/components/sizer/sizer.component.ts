import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss'],
})
export class SizerComponent {
  @Input() public size!: number | string;
  @Output() public sizeChange = new EventEmitter<number>();

  public dec(): void {
    this.resize(-1);
  }
  public inc(): void {
    this.resize(+1);
  }

  public resize(delta: number): void {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
