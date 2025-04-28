import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';

@Component({
    selector: 'app-form-block',
    imports: [],
    templateUrl: './form-block.component.html',
    styleUrl: './form-block.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBlockComponent {
    label: InputSignal<string> = input<string>('');
    error: InputSignal<string> = input<string>('');
}
