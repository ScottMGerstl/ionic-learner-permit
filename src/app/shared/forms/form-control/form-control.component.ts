import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent {
    @Input() label: string;
    @Input() errorMessage: string;

    constructor() {}
}
