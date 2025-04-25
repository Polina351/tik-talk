import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';

@Component({
    selector: 'app-input',
    imports: [],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class]': 'state()',
    }
})
export class InputComponent {
    //TODO: type в enum
    state: InputSignal<'default'| 'error' | 'active' | 'success'> = input<'default' | 'error' | 'active' | 'success'>('default');

}
