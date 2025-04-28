import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg[app-telegram-icon]',
    imports: [],
    templateUrl: './telegram-icon.component.svg',
    styleUrl: './telegram-icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        width: '17',
        height: '18',
        viewBox: '0 0 17 18',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    }
})
export class TelegramIconComponent {

}
