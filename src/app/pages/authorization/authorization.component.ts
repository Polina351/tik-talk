import { ChangeDetectionStrategy, Component } from '@angular/core';
import {InputComponent} from '../../ui/form/input/input.component';
import {FormBlockComponent} from '../../ui/form/helpers/form-block/form-block.component';
import {TelegramIconComponent} from '../../icons/telegram-icon/telegram-icon.component';
import {SeePasswordIconComponent} from '../../icons/see-password-icon/see-password-icon.component';

@Component({
  selector: 'app-authorization',
    imports: [
        InputComponent,
        FormBlockComponent,
        TelegramIconComponent,
        SeePasswordIconComponent
    ],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorizationComponent {

}
