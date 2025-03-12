import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'instructions-modal',
  templateUrl: './instructions-modal.component.html',
  styleUrl: './instructions-modal.component.scss',
})
export class InstructionsModalComponent {
  @Output() close = new EventEmitter<void>();

  closeModal(): void { // Emitting event to parent to close modal
    this.close.emit();
  }
}
