import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register/register.component";
import {Route} from '@angular/router'


export const registerRoutes: Route[] = [
    {
      path: '',
      component: RegisterComponent,
    },
  ]
export const loginRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
]