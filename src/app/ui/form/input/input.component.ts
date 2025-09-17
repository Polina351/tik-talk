import { ChangeDetectionStrategy, Component, forwardRef, input, InputSignal } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-input',
    imports: [],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }

    ],
    host: {
        '[class]': 'state()',
    }
})
export class InputComponent implements ControlValueAccessor {
    //TODO: type в enum
    state: InputSignal<'default'| 'error' | 'active' | 'success'> = input<'default' | 'error' | 'active' | 'success'>('default');
    formControlName: InputSignal<string> = input<string>('');

    public value?: string;
    onChange: (value: string) => void = (): void => {};
    onTouched: () => void = (): void => {};

    writeValue(value: string): void {
        this.value = value;
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    onInputChange(event: Event): void {
        const value = (event.target as HTMLInputElement).value;
        this.onChange(value);
    }

}
