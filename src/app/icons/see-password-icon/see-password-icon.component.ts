import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg[app-see-password-icon]',
    imports: [],
    templateUrl: './see-password-icon.component.svg',
    styleUrl: './see-password-icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        width: '21',
        height: '20',
        viewBox: '0 0 21 20',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    }
})
export class SeePasswordIconComponent {

}
