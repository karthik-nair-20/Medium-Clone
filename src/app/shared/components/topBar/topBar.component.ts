import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { combineLatest } from "rxjs";
import { RouterLink } from "@angular/router";
import { selectCurrentUser } from "src/app/auth/store/reducer";

@Component({
    selector: 'mc-topbar',
    templateUrl: './topBar.component.html',
    standalone: true,
    imports: [CommonModule, RouterLink],
})

export class TopBar {

    data$ = combineLatest({
        currentUser: this.store.select(selectCurrentUser),
    })

    constructor(private store: Store){}

}
