import {ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';

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

    buttonClick: OutputEmitterRef<void> = output<void>();

    protected onButtonClick(): void {
        this.buttonClick.emit();
    }
}
