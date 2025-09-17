import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationStore } from '../../stores/authrization/authorization.store';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    private fb: FormBuilder = inject(FormBuilder);
    private authorizationStore= inject(AuthorizationStore);

    private form: FormGroup<any> = this.fb.group<any>({ //TODO: type
        login: this.fb.nonNullable.control('', [Validators.required]),
        password: this.fb.nonNullable.control('', [Validators.required]),
    })

    constructor() { }

    public getFormGroup(): FormGroup<any> {
        return this.form;
    }

    public authorization(): void {
        let formData = {
            username: this.form.value.login,
            password: this.form.value.password,
        };
        console.log(formData);
        this.authorizationStore.authorization(formData);
    }

}
