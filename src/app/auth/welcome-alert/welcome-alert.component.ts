import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-welcome-alert',
  templateUrl: './welcome-alert.component.html',
  styleUrls: ['./welcome-alert.component.css']
})
export class WelcomeAlertComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
      this.close.emit()
  }
}
