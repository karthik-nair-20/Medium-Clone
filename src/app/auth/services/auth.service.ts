import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Observable, map } from 'rxjs'
import { RegisterRequestInterface } from '../types/registerRequestInterface'
import { AuthStateInterface } from '../types/authState.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUsers.interface'
import { environment } from 'src/environments/environment.development'
import { AuthResponseInterface } from '../types/authResponse.interface'
import { LoginRequestInterface } from '../types/loginRequestInterface'



@Injectable({
    providedIn: 'root',
})


export class AuthService{

    getUser(response: AuthResponseInterface ):CurrentUserInterface{
        return response.user;
    }

    constructor(private http: HttpClient){}

    getCurrentUser(): Observable<CurrentUserInterface> {
        const url = environment.apiurl + "/user"
        return this.http
        .get<AuthResponseInterface>(url)
        .pipe(map(this.getUser))
    }

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiurl + "/users"
        return this.http
        .post<AuthResponseInterface>(url, data)
        .pipe(map(this.getUser))
    }

    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiurl + "/users/login"
        return this.http
        .post<AuthResponseInterface>(url, data)
        .pipe(map(this.getUser))
    }


}
  