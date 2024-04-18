import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class PersistanceService {
    //setter
    set(key: string, data: unknown): void{
        try{
            localStorage.setItem(key,JSON.stringify(data));
        }catch(e){
            console.log("error while setting data to localStroage",e);
        }
    }
    //getter
    get(key: string): unknown {
        try{
            const localStorageItem = localStorage.getItem(key);
            return localStorageItem ? JSON.parse(localStorageItem) : null;
        }catch(e){
            console.log("error while getting data from localStorage",e);
            return null;
        }
    }
}