import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-alert2',
    templateUrl: './alert2.component.html',
    styleUrls: ['./alert2.component.css']
})
export class Alert2Component {
    
    @Output() close = new EventEmitter<void>();

    onClose() {
        this.close.emit()
    }
}