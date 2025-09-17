import {signalStore, withComputed, withState} from '@ngrx/signals';
import {withEntities} from '@ngrx/signals/entities';
import {withAuthorizationApi} from './authorization-api.feature';

type TAuthorizationState = {
    access_token: string;
    refresh_token: string;
    isAuth: boolean;
    isLoaded: boolean;
}

const initialState: any = {
    access_token: '',
    refresh_token: '',
    isAuth: false,
}

export const AuthorizationStore = signalStore(
    { providedIn: "root", protectedState: false },
    withState(initialState),
    withEntities<any>(),
    withAuthorizationApi(),
    withComputed((store) => ({

    }))
)
