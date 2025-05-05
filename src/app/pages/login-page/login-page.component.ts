import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from './footer/footer.component';

export function checkRegExp ( regExp: RegExp ):  ValidatorFn {
  return ( control: AbstractControl ): ValidationErrors | null => {
    const forbidden = regExp.test( control.value );
    return !forbidden ? { forbidden: { value: control.value } } : null;
  }
}

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  public validatorsForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('',checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)),
    },
  );

  public handleValidator() {
    if (this.validatorsForm.valid) {
      console.log(this.validatorsForm.value);
    } else {
      alert('Форма не валидна')
    }
    console.log(this.validatorsForm.get(['login'])?.value)
  }

}
