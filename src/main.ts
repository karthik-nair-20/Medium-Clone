import {isDevMode} from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRouter } from './app/app.routers';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureName, authFeatureReducer } from './app/auth/store/reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from './app/auth/store/effects'
import { provideRouterStore, routerReducer } from '@ngrx/router-store';


bootstrapApplication(AppComponent, { providers: [provideRouter(appRouter), 
    provideHttpClient(),
    provideState(authFeatureName,authFeatureReducer),
    provideStore({
        router: routerReducer
    }), 
    provideRouterStore(),
    provideEffects(authEffects),
    provideStoreDevtools({
    maxAge: 25,
    logOnly: !isDevMode(),
    autoPause: true,
    trace: false,
    traceLimit: 75
})
] 
});

