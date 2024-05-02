import {isDevMode} from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRouter } from './app/app.routers';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureName, authFeatureReducer } from './app/auth/store/reducer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from './app/auth/store/effects'
import * as feedEffects from './app/shared/components/feed/store/effects'
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { authInterceptor } from './app/shared/services/authIntercepter';
import { feedFeatureKey, feedReducer } from './app/shared/components/feed/store/reducers';


bootstrapApplication(AppComponent, { providers: [provideRouter(appRouter), 
    provideHttpClient(withInterceptors([authInterceptor,])),
    provideState(authFeatureName,authFeatureReducer),
    provideState(feedFeatureKey, feedReducer),
    provideStore({
        router: routerReducer
    }), 
    provideRouterStore(),
    provideEffects(authEffects, feedEffects),
    provideStoreDevtools({
    maxAge: 25,
    logOnly: !isDevMode(),
    autoPause: true,
    trace: false,
    traceLimit: 75
})
] 
});

