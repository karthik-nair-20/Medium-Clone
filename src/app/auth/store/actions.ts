import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequestInterface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUsers.interface';
import { BackEndErrorInterface } from 'src/app/shared/types/backendError.interface';
import { LoginRequestInterface } from '../types/loginRequestInterface';


// export const register = createAction(
//     '[Auth] Register',
//   props<{request : RegisterRequestInterface}>()
// )

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    'Register': props<{request: RegisterRequestInterface}>(),
    'Register success': props<{currentUser: CurrentUserInterface}>(),
    'Register failure': props<{errors: BackEndErrorInterface}>(),

    Login: props<{request: LoginRequestInterface}>(),
    'Login success': props<{currentUser: CurrentUserInterface}>(),
    'Login failure': props<{errors: BackEndErrorInterface}>(),

    'Get Current User': emptyProps(),
    'Get Current User success': props<{currentUser: CurrentUserInterface}>(),
    'Get Current User failure': emptyProps(),

  }
})