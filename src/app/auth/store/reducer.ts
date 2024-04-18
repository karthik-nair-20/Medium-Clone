import { createFeature, createReducer, on } from '@ngrx/store';
import { authActions } from './actions';
import { AuthStateInterface } from '../types/authState.interface';
import { routerNavigationAction } from '@ngrx/router-store';


const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoading: false,
    currentUser: undefined,
    validationError: null,
}

const authFeature = createFeature({
    name: "auth",
    reducer: createReducer(
        initialState,
        on(authActions.register, (state) => ({...state, 
            isSubmitting: true,
            validationError: null
        })),
        on(authActions.registerSuccess, (state,action) => ({...state, 
            isSubmitting: false,
            currentUser: action.currentUser,
        })),
        on(authActions.registerFailure, (state,action) => ({...state, 
            isSubmitting: false,
            validationError: action.errors,
        })),

        on(authActions.login, (state) => ({...state, 
            isSubmitting: true,
            validationError: null
        })),
        on(authActions.loginSuccess, (state,action) => ({...state, 
            isSubmitting: false,
            currentUser: action.currentUser,
        })),
        on(authActions.loginFailure, (state,action) => ({...state, 
            isSubmitting: false,
            validationError: action.errors,
        })),
        on(routerNavigationAction, (state) => ({...state, validationError: null})),
    )
})

export const {
    name: authFeatureName, 
    reducer: authFeatureReducer,
    selectIsSubmitting,
    selectIsLoading,
    selectCurrentUser,
    selectValidationError
} = authFeature
