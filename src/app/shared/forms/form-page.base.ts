import { FormBuilder, FormGroup } from '@angular/forms';
import { FormAction } from '../enum/form-action.enum';

export abstract class FormPageBase {
    busy = false;
    submitted = false;

    form: FormGroup;
    formAction: FormAction;

    constructor(private readonly fb: FormBuilder, formAction: FormAction) {
        this.form = this.createForm(this.fb);
        this.formAction = formAction;
    }

    ionViewWillEnter() {
        this.busy = false;
        this.submitted = false;

        if (this.isEdit === false) {
            this.form.reset();
        }
    }

    async onSubmit() {
        this.submitted = true;

        if (this.form.valid) {
            if (this.busy) {
                return;
            }

            this.busy = true;
            await this.onFormCanSubmit();
            this.busy = false;
        }
    }

    get isEdit() {
        return this.formAction === FormAction.update;
    }

    protected abstract createForm(fb: FormBuilder): FormGroup;

    protected abstract onFormCanSubmit(): Promise<void> | void;
}
