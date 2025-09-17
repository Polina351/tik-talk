import {patchState, signalStoreFeature, withMethods} from '@ngrx/signals';
import {inject} from '@angular/core';
import {AuthService, Token} from '../../api';
import {withEntities} from '@ngrx/signals/entities';
import {exhaustMap, pipe, switchMap, tap} from 'rxjs';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {ActivatedRoute, Router} from '@angular/router';
import {tapResponse} from '@ngrx/operators';

export function withAuthorizationApi() {
    return signalStoreFeature(
        withMethods((
            store: any,
            apiService: any = inject(AuthService),
            router: Router = inject(Router),
            route: ActivatedRoute = inject(ActivatedRoute)
        ) =>{
            let methods = {
                authorization: rxMethod<{username: string; password: string}>(
                    pipe(
                        tap(() => patchState(store, { isLoading: true, error: null })),
                        switchMap(({ username, password }) =>
                            apiService.loginForAccessTokenAuthTokenPost(
                                username,
                                password,
                                'password',
                                'read write',
                                'your_client_id',
                                'your_client_secret'
                            ).pipe(
                                tapResponse({
                                    next: (tokens: Token) => {
                                        sessionStorage.setItem('access_token', tokens.access_token);

                                        if (tokens.refresh_token) {
                                            sessionStorage.setItem('refresh_token', tokens.refresh_token);
                                        }

                                        patchState(store, { isAuth: true, access_token: tokens.access_token, refresh_token: tokens.refresh_token }); //TODO: надо ли сохранять токены в стор

                                        router.navigate(['/profile']);
                                    },
                                    error: (err: any) => patchState(store, { error: err.message }),
                                })
                            )
                        )
                    )
                )
            }
            return methods;
        }),
    )
}

//TODO: 1.дописать метод авторизации, 2.описать типы, 3.подумать над авторизацией,изучить, где хранить токены
