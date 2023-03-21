import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {
  private _count: number = 0;
  @Input() title: string | undefined;
  @Input() color: string | undefined;
  @Output() newItemEvent = new EventEmitter<number>();


  changeTitle(): void {
    this.title = `click  ${++this._count}`;
    this.newItemEvent.emit(this._count);
  }
}
