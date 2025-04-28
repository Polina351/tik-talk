import {ChangeDetectionStrategy, Component, input, InputSignal, output} from '@angular/core';

@Component({
    selector: 'button[app-main-button]',
    imports: [],
    templateUrl: './main-button.component.html',
    styleUrl: './main-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    host: {
        '(click)': 'onButtonClick()',
    }
})
export class MainButtonComponent {
    label: InputSignal<string> = input<string>('label');

    buttonClick = output<void>();

    protected onButtonClick() {
        console.log('buttonClick');
        this.buttonClick.emit();
    }
}
