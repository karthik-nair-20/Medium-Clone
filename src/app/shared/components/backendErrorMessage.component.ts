import {CommonModule} from '@angular/common'
import {Component, Input, OnInit} from '@angular/core'
import { BackEndErrorInterface } from '../types/backendError.interface'


@Component({
    selector: 'mc-backend-error-messages',
    templateUrl: './backendErrorMesage.component.html',
    standalone: true,
    imports: [CommonModule],
})

export class BackendErrorMessages implements OnInit{
    @Input() backendErrors: BackEndErrorInterface = {}
    errorMessages: string[] = []
    
    // ngOnInit(): void {
    //     this.errorMessages = Object.keys(this.backendErrors).map((name: string) =>{
    //         const message = this.backendErrors[name].join(' ')
    //         return `${name} ${message}`
    //     })
    //     // console.log(this.errorMessages);
    // }
    ngOnInit(): void {
        this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
          const messages = this.backendErrors[name].join(' ')
          return `${name} ${messages}`
        })
        console.log(this.errorMessages);
      }

    // ["username is not valable",
    // "email is not valid"
    // ]

    // Define an object
    // const myObject = {
    //     name: 'John',
    //     age: 30,
    //     city: 'New York'
    // };
    
    // // Use Object.keys to get the keys of the object
    // const keysArray = Object.keys(myObject);
    
    // // Log the keys array
    // console.log(keysArray); // Output: ['name', 'age', 'city']



}

