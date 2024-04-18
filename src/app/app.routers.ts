import { Route } from "@angular/router";

export const appRouter: Route[] = [
    {
        path: 'register',
        loadChildren: () => import('./auth/auth.routers').then((m) =>m.registerRoutes )
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.routers').then((m) =>m.loginRoutes )
    },
]