import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from 'src/app/auth/store/actions';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequestInterface';
import { selectIsSubmitting, selectValidationError } from 'src/app/auth/store/reducer';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BackendErrorMessages } from 'src/app/shared/components/backendErrorMessage.component';
import { combineLatest } from 'rxjs';
import { LoginRequestInterface } from '../../types/loginRequestInterface';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, BackendErrorMessages],
  templateUrl: './login.component.html',
  // styleUrl: './register.component.css'
})
export class LoginComponent {

  form = this.fb.nonNullable.group({
    password: ['', Validators.required],
    email: ['', Validators.required]
  }
  )

  constructor(private fb : FormBuilder, 
    private store: Store,
    private authService: AuthService
  ){}

  // isSubmitting$ = this.store.select(selectIsSubmitting);

  data$ = combineLatest({
    isSubmitting : this.store.select(selectIsSubmitting),
    backendErrors : this.store.select(selectValidationError),

  })

  onSubmit(){
    console.log('form', this.form.getRawValue())
    const request: LoginRequestInterface =  {
      user: this.form.getRawValue()
    } 
    this.store.dispatch(authActions.login({request}))
    // this.authService.register(register).subscribe((res) => console.log(res));
  }

}
