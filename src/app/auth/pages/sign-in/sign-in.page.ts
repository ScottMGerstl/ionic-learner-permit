import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormAction } from 'src/app/shared/enum/form-action.enum';
import { FormPageBase } from '../../../shared/forms/form-page.base';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.page.html',
    styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage extends FormPageBase {
    busy = false;
    submitted = false;

    mode: SignInFormMode = 'sign-in';
    currentModeConfig: SignInFormConfig = signInFormModeConfig['sign-in'];

    form: FormGroup;

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router,
        private readonly loadingController: LoadingController,
        fb: FormBuilder
    ) {
        super(fb, FormAction.auth);
    }

    onModeSwitchClick() {
        this.mode = this.mode === 'sign-in' ? 'sign-up' : 'sign-in';
        this.currentModeConfig = signInFormModeConfig[this.mode];
    }

    protected async onFormCanSubmit() {
        const loader = await this.loadingController.create({
            keyboardClose: true,
            spinner: 'circular',
            message: 'Signing you in',
        });

        loader.present();

        setTimeout(() => {
            try {
                this.authService.signIn();
                this.router.navigateByUrl('/places');
            } catch (err) {
                this.busy = false;
                console.error(err);
            } finally {
                loader.dismiss();
            }
        }, 1500);
    }

    protected createForm(fb: FormBuilder) {
        return fb.group({
            email: [null],
            password: [null],
        });
    }
}

type SignInFormMode = 'sign-in' | 'sign-up';

interface SignInFormConfig {
    title: string;
    subtitle: string;
    switchText: string;
    confirmText: string;
}

const signInFormModeConfig: { [key in SignInFormMode]: SignInFormConfig } = {
    'sign-in': {
        confirmText: 'Sign in',
        switchText: 'Create an account',
        title: 'Sign In',
        subtitle: 'Sign in to get started',
    },
    'sign-up': {
        confirmText: 'Sign up',
        switchText: 'Back to sign in',
        title: 'Create an Account',
        subtitle: 'Create an account to get started',
    },
};
