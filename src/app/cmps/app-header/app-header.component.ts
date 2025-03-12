import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent {
  isInstructionsModal: boolean = false; // Track instructions modal display

  toggleModal(): void { // Toggle instructions modal display
    this.isInstructionsModal = !this.isInstructionsModal;
  }
}
