import{Component} from 'angular2/core'
import { FORM_DIRECTIVES, ControlGroup, Control, Validators, FormBuilder } from 'angular2/common'
import { matchingPasswords } from './passwordValidators'

@Component({
    selector: 'change-password-form',
    templateUrl: 'app/change-password.component.html',
    directives: [FORM_DIRECTIVES]
})

export class ChangePasswordComponent{
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([
                Validators.required, 
                Validators.minLength(5),
                ])],
            confirmPassword: ['', Validators.required],
        }, {validator: matchingPasswords('newPassword', 'confirmPassword')});
    }

    changePassword(){
        if(this.form.find('currentPassword').value =="password"){
            alert('Form submitted');
            console.log(this.form.value);
        }
        else
        {
            this.form.find('currentPassword').setErrors({
                invalidCurrentPassword: true
            });
        }
        
    }
}